import * as TwHelper from "./TwoWireHelper"



function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


// websocket logic

var gateway = "wss://192.168.20.21/chat";
var websocket;


function onWsClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
}

function onMsg(evnt) {
    twHandler.onMsgArrived(evnt);
}


function initWs() {
    console.log('Trying to open a WebSocket connection...');
    websocket = new WebSocket(gateway);
    // websocket.onopen = onWsOpen;
    websocket.onclose = onWsClose;
    websocket.onmessage = onMsg;


    // returns promise
    return new Promise((resolve, reject) => {
        websocket.onopen = (evnt) => {
            console.log("ws opened")
            resolve(evnt);
        }
    })
}










// tw handler 


const twHandler = {


    queuedMsgs: [],
    sentMsgs: [],
    busy: false,


    // finds matching sent message and then removes from sent messages
    onMsgArrived: function (rxMsg) {

        let idMatch = "";
        let rxMsgData = JSON.parse(rxMsg.data);

        this.sentMsgs.forEach(function (item, index) {
            if (item.id === rxMsgData.id) {
                item.success(rxMsgData);

                // item.fail(rxMsgData);
                idMatch = item.id;
            }
        });

        // removes matching sent message
        this.sentMsgs = this.sentMsgs.filter(msg => msg.id !== idMatch)

        //	automatically fetches next message and sends
        if (this.queuedMsgs.length != 0) {
            this.sendNextMessage();
        }
    },



    init: function () {

        // checks for and removes expired messages, called every 800ms
        setInterval(() => {

            let now = Date.now();

            this.sentMsgs.forEach(function (item, index) {
                if (item.timestamp - now > 5000) {
                    item.fail("No response received, expired: ", item);
                }
            });


            // removes expired messages
            this.sentMsgs = this.sentMsgs.filter(msg => msg.timestamp - now < 5000);

        }, 800);
    },

    queueMsg: function (msg) {

        // returns promise
        return new Promise((resolve, reject) => {

            setTimeout(
                () => {


                    this.queuedMsgs.push({
                        id: String(uuidv4()),
                        timestamp: -1,
                        msg: msg,
                        success: (resp) => { return resolve(resp); },
                        fail: (e) => { return reject(e); }
                    })


                    // // sends next message
                    this.sendNextMsg();
                }, 20);

        })
    },




    // sends message if !busy
    sendNextMsg: function () {

        if (this.queuedMsgs.length && !this.busy) {

            this.busy = true;
            let nextMsg = this.queuedMsgs.shift();

            websocket.send(JSON.stringify(
                {
                    "id": nextMsg.id,
                    "maxTries": nextMsg.msg.maxTries,
                    "timeout": nextMsg.msg.timeout,
                    "addr": nextMsg.msg.addr,
                    "cmd": nextMsg.msg.cmd,
                    "d1": nextMsg.msg.d1,
                    "d2": nextMsg.msg.d2,
                    "d3": nextMsg.msg.d3,
                    "d4": nextMsg.msg.d4
                }));

            this.sentMsgs.push(nextMsg);
            this.busy = false;
        }
    }

};










// tw comms 







const rd = {
    settings: {
        serial: async function (arg) {
            let res = await twHandler.queueMsg({ "maxTries": 3, "timeout": 200, "addr": arg.addr, "cmd": 21, "d1": 7, "d2": 0, "d3": 0, "d4": 0 })
    

            if (res.payload.twResCode != 0) {
                throw "Invalid tw resp: ", res;
            }

            return TwHelper.convert3BytesToUint24(res.payload.d1, res.payload.d2, res.payload.d3)
        },

        baseSettings: async function (arg) {

            let res = await twHandler.queueMsg({ "maxTries": 3, "timeout": 200, "addr": arg.addr, "cmd": 21, "d1": 25, "d2": 0, "d3": 0, "d4": 0 });

            if (res.payload.twResCode!= 0) {
                throw "Invalid tw resp: ", res;
            }

            return {
                baseAddr: res.payload.d1,
                channelIndex: res.payload.d2,
                totalChannels: res.payload.d3
            }
        },


        pcbType: async function (arg) {

            let res = await twHandler.queueMsg({ "maxTries": 3, "timeout": 200, "addr": arg.addr, "cmd": 21, "d1": 37, "d2": 0, "d3": 0, "d4": 0 });

            if (res.payload.twResCode!= 0) {
                throw "Invalid tw resp: ", res;
            }

            return {
                pcbType: TwHelper.pcbTypeToString(res.payload.d1),
                addr: res.payload.d2,
                cable: res.payload.d3
            }
        },
    },


    version: {
        program: async function (arg) {
            let res = await twHandler.queueMsg({ "maxTries": 3, "timeout": 200, "addr": arg.addr, "cmd": 20, "d1": 1, "d2": 0, "d3": 0, "d4": 0 });
            if (res.payload.twResCode!= 0) {
                throw "Invalid tw resp: ", res;
            }
            return {
                version: TwHelper.convert2BytesToUint16(res.payload.d1, res.payload.d2) / 1000,
                checksum: `0x${TwHelper.convert2BytesToUint16(res.payload.d3, res.payload.d4).toString(16).toUpperCase()}`
            }
        },

        programDate: async function (arg) {
            let res = await twHandler.queueMsg({ "maxTries": 3, "timeout": 200, "addr": arg.addr, "cmd": 20, "d1": 4, "d2": 0, "d3": 0, "d4": 0 });
            if (res.payload.twResCode!= 0) {
                throw "Invalid tw resp: ", res;
            }

            return new Date(res.payload.d3 + 2000, res.payload.d2 - 1, res.payload.d1).toLocaleDateString();

        },




    }


}



const wr = {
    settings: {
        serial: async function (arg) {

            let arr = TwHelper.convertUint24To3Bytes(arg.serial);


            let res = await twHandler.queueMsg({ "maxTries": 3, "timeout": 100, "addr": arg.addr, "cmd": 121, "d1": 7, "d2": arr[0], "d3": arr[1], "d4": arr[2] });

            if (res.payload.twResCode!= 0) {
                throw "Invalid tw resp: ", res;
            }

            return;
        },

        baseSettings: async function (arg) {


            let res = await twHandler.queueMsg({ "maxTries": 3, "timeout": 100, "addr": arg.addr, "cmd": 121, "d1": 25, "d2": arg.baseAddr, "d3": arg.channelIndex, "d4": arg.totalChannels });

            if (res.payload.twResCode!= 0) {
                throw "Invalid tw resp: ", res;
            }

            return;
        },

    }
}



async function init() {
    await initWs();
    twHandler.init()
}











export { init, rd, wr };
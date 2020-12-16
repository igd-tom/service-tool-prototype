
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}






// tw handler 


const twHandler = {


    queuedMsgs: [],
    sentMsgs: [],
    busy: false,


    // finds matching sent message and then removes from sent messages
    onMsgArrived: function (rxMsg) {

        let idMatch = 0;
        let rxMsgData = JSON.parse(rxMsg.data);

        this.sentMsgs.forEach(function (item, index) {
            if (item.id === rxMsgData.id) {
                item.success(rxMsgData);
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
            this.queuedMsgs.push({
                id: uuidv4(), timestamp: -1, msg: msg, success: (resp) => { resolve(resp) }, fail: (e) => { reject(e) }
            })

            // sends next message
            this.sendNextMsg();
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




export { init, rd };





// tw comms 


function convert3BytesToUint24(n1, n2, n3) {

    let nReturn = 0;
    let nTemp;

    nReturn |= (n3 << 16);
    nTemp = n2;
    nTemp = (nTemp << 8) & 0x00FF00;
    nReturn |= nTemp;
    nReturn |= (n1 & 0x0000FF);

    return nReturn;
}





const rd = {
    settings: {
        serial: async function () {

            let res = await twHandler.queueMsg({ "maxTries": 3, "timeout": 100, "addr": 255, "cmd": 21, "d1": 7, "d2": 0, "d3": 0, "d4": 0 });

            if (res.twResCode != 0) {
                throw "Invalid tw resp: ", res;
            }

            return convert3BytesToUint24(res.payload.d1, res.payload.d2, res.payload.d3)
        }
    }
};


async function init() {
    await initWs();
    twHandler.init()
}






// websocket logic

var gateway = "ws://localhost:8080";
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
            resolve(evnt);
        }
    })
}








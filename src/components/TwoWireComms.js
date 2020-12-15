
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}



// websocket logic

var gateway = "ws://localhost:8080";
var websocket;


function onOpen(event) {
    console.log('Connection opened');
    twHandler.init();

}

function onClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
}
function onMessage(event) {
    console.log(event);
}

function init() {
    console.log('Trying to open a WebSocket connection...');
    websocket = new WebSocket(gateway);
    websocket.onopen = onOpen;
    websocket.onclose = onClose;
    websocket.onmessage = twHandler.onMsgArrived;
}



// tw handler 


const twHandler = {

    queuedMsgs: [],
    sentMsgs: [],
    busy: false,


    init: function () {

        // checks for and removes expired messages, called every 800ms
        setInterval(() => {

            let now = Date.now();

            // calls msg fail method on expired messages
            for (const msg in this.sentMsgs) {
                if (msg.msg.timestamp - now > 5000) {
                    msg.fail("No response received, expired: ", msg);
                }
            }

            // removes expired messages
            this.sentMsgs = this.sentMsgs.filter(msg => msg.timestamp - now < 5000);

        }, 800);
    },

    queueMsg: function (msg) {

        // sends next message
        this.sendNextMsg();

        // returns promise
        return new Promise((resolve, reject) => {
            this.queuedMsgs.push({ id: uuidv4(), timestamp: -1, msg: msg, success: (resp) => { resolve(resp) }, fail: (e) => { reject(e) } })
        })


    },


    // sends message if !busy
    sendNextMsg: function () {
        if (this.queuedMsgs.length && !this.busy) {

            this.busy = true;
            let nextMsg = this.queuedMsgs.shift();

            console.log(nextMsg)

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
    },

    // finds matching sent message and then removes from sent messages
    onMsgArrived: function (rxMsg) {

        let idMatch = 0;
        let rxMsgData = JSON.parse(rxMsg.data);

        // calls msg success method
        for (const msg in this.sentMsgs) {
            if (msg.msg.id === rxMsgData.id) {
                msg.success(rxMsgData);
                idMatch = msg.msg.id;
            }
        }

        // removes matching sent message
        this.sentMsgs = this.sentMsgs.filter(msg => msg.id !== idMatch)


        //	automatically fetches next message and sends
        if (this.queuedMessages.length != 0) {
            this.sendNextMessage();
        }

    },





}




export { init, rd };










// tw comms 




const rd = {
    settings: {
        serial: function () {
            console.log("read serial");

            twHandler.queueMsg({ "maxTries": 3, "timeout": 100, "addr": 255, "cmd": 21, "d1": 3, "d2": 0, "d3": 0, "d4": 0 })
                .then(res => console.log("success", res))
                .catch(e => console.log(e))


            return "123";
        }
    }
};


// rd.settings.serial();









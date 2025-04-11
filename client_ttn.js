// import dependancies
const mqtt = require("mqtt"); // to received mqtt messages
const fs = require("fs"); // to read config files

// import config from files
const config = JSON.parse(fs.readFileSync(__dirname + "/config.json").toString());
config.devId = config.devId.toLowerCase();

// compute topics
const generalTopic = "v3/" + config.appId + "/devices";
const deviceTopic = generalTopic + "/" + config.devId;
const payloadTopic = deviceTopic + "/up";

// connect client
const client = mqtt.connect(config.url, { "username": config.user, "password": config.key });

// functions to use to define client behavior (documentation : https://www.npmjs.com/package/mqtt)
client.on("<event>", function () { // react to an event

});

client.subscribe("<topic>", function (err) { // subscribe to topic

});

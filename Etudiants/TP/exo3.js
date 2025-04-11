/*
    L'objectif de ce script est d'écrire un client MQTT permettant de se connecter au serveur et qui imprime automatiquement dans la console les données contenues dans les messages reçus (fait en utilisant l'exo 1 et 2).
*/

// import dependancies
const mqtt = require("mqtt"); // to received mqtt messages
const fs = require("fs"); // to read config files

// import config from files
const config = JSON.parse(fs.readFileSync(__dirname + "/config.json").toString());
const payloadFormat = JSON.parse(fs.readFileSync(__dirname + "/payload_format.json").toString());

// On extrait le devId du fichier de configuration
config.devId = config.devId.toLowerCase();

// On crée notre topic
const generalTopic = "v3/" + config.appId + "/devices";
const deviceTopic = generalTopic + "/" + config.devId;
const payloadTopic = deviceTopic + "/up";

// connect client
const client = mqtt.connect(config.url, { "username": config.user, "password": config.key });

// define client behavior - Il affiche l'erreur en cas de mauvaise connexion
client.on("<event>", function () { // react to an event

});

client.subscribe("<topic>", function (err) { // subscribe to topic

});

// fonction exo 2
const retrieve_hex_payload = function (message) {
    // A COMPLETER
    return parsedMessage.uplink_message.decoded_payload.payload_hex; // location of the payload inside the message and return it
}

// fonction exo 1
const decode_hex_payload = function (hexPayload, payloadFormat) {

    // Initialisation du payload à retourner 
    let decodedPayload = {};
    
    // A COMPLETER

    return decodedPayload;
}
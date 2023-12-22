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
client.on("connect", function () { // when the client get connected...
    client.subscribe(payloadTopic, function (err) { // subscribe to topic
        if (err) {
            console.log(err);
        } else {
            console.log("client connected");
        }
    });
});

// Comportement du client lorsqu'il recoit un message
client.on("message", function (topic, message) { // when the client receives a message...
    if (topic === payloadTopic) {  // when it is a data message, decode it
        let hexPayload = retrieve_hex_payload(message); // exo 2
        let payload = decode_hex_payload(hexPayload, payloadFormat); // 1
        return payload;
    }
});

// exo 2

/**
 * Fonction pour retrouver le message à décoder dans le format de message envoyé
 * @param {[object]} message Format de sortie des capteurs contenant tous les champs et entre autre le message à décoder
 * @return {[str]} Message héxadécimal à décoder
 */
const retrieve_hex_payload = function (message) {
    let parsedMessage = JSON.parse(message); // transfor the message (JSON) into a .js object
    return parsedMessage.uplink_message.decoded_payload.payload_hex; // location of the payload inside the message and return it
}

// exo 1

/**
 * Fonction de décodage du message à un format lisible
 * @param  {[str]} hexPayload Message hexadécimal contenant les informations sortant du capteur et qu'on devra décoder
 * @param {[object]} payloadFormat Format du message hexadécimal qu'on devra décoder
 * @return {[object]} Message décodé et écrit dans un format lisible
 */
const decode_hex_payload = function (hexPayload, payloadFormat) {

    // Initialisation du payload à retourner 
    let decodedPayload = {};
    // Nombre de byte par caractères
    let nbCharInByte = 2;

    for (let field in payloadFormat) {

        // Reinitialiser le champ à 0
        decodedPayload[field] = 0

        // Retrouver la position et la taille du champ demandé (température, humidité,...)
        let position = payloadFormat[field].position;
        let size = payloadFormat[field].size;

        // DECODAGE

        // Si c'est un champ de 1 caractère ou 2
        if (size == 1) {

            // On tire la partie de la chaine de caractère correspondante à la position et on y ajoute 1
            hexString = hexPayload.substring(position * nbCharInByte, (position + 1) * nbCharInByte)
        } else {
            // On extrait d'abord le MSB et ensuite le LSB et ensuite on les concatène
            hexString = hexPayload.substring((position + 1) * nbCharInByte, (position + 2) * nbCharInByte) // MSB
            hexString += hexPayload.substring(position * nbCharInByte, (position + 1) * nbCharInByte) // LSB
        }

        // On convertit en entier le message extrait et on le met dans le champ correspondant
        decodedPayload[field] = parseInt(hexString, 16)

        // On effectue les conversion correspondante au champ
        if (field == "co2") {
            decodedPayload[field] = decodedPayload[field] * 10;
        }
        else if (field == "temperature") {
            decodedPayload[field] = decodedPayload[field] / 10;
        }

        // On affiche dans la console un message du type "temperature = 30°C"
        console.log(field + " = " + decodedPayload[field] + payloadFormat[field].unit);
    }

    // On retourne le message décoder en objet
    return decodedPayload;
}
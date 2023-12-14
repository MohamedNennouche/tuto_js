/*
    L'objectif de ce script est de créer une fonction permettant d'extraire cette chaîne de caractère d'un fichier contenant un exemple de message envoyé par le capteur et à y appliquer la fonction précédemment créé.
*/

const fs = require("fs"); // to read files (file system for Javascript)

/**
 * Fonction pour retrouver le message à décoder dans le format de message envoyé
 * @param {[object]} message Format de sortie des capteurs contenant tous les champs et entre autre le message à décoder
 * @return {[str]} Message héxadécimal à décoder
 */
const retrieve_hex_payload = function (message) {
    let parsedMessage = JSON.parse(message); // transfor the message (JSON) into a .js object
    return parsedMessage.uplink_message.decoded_payload.payload_hex; // location of the payload inside the message and return it
}

// Essai de la fonction

// Un message test
message = fs.readFileSync(__dirname + "/message_example.json").toString()

parseredMessage = retrieve_hex_payload(message)

console.log(parseredMessage)

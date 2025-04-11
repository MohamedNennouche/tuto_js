/*
    L'objectif de ce script est de créer une fonction permettant d'extraire cette chaîne de caractère d'un fichier contenant un exemple de message envoyé par le capteur et à y appliquer la fonction précédemment créé.
*/

const fs = require("fs"); // to read files (file system for Javascript)



const retrieve_hex_payload = function (message) {
    // a compléter
}

// Essai de la fonction
//const fs = require("fs");
// Un message test
message = JSON.parse(fs.readFileSync(__dirname + "/message_example.json").toString())

parseredMessage = retrieve_hex_payload(message)

console.log(parseredMessage)

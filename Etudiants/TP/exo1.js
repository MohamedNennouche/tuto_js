/*
    L'objectif de ce script est de créer une fonction permettant de convertir une chaîne de caractères hexadécimaux formatée comme celle dans laquelle le capteur enregistre ses données en sortie console lisible.

    10 b600 2a00 0000 00 0a00 63
*/

const fs = require("fs"); // to read files (file system for Javascript)


const decode_hex_payload = function (hexPayload, payloadFormat) {
    // Initialisation du payload à retourner 
    let decodedPayload = {};
    // A compléter

    // On retourne le message décoder en objet
    return decodedPayload;
}

// Utilisation de la fonction

// Lecture du fichier JSON est extraction de l'objet (On transforme en string car la sortie par défaut de readFileSync est binaire, JSON.parse transforme en objet la chaine de caractères retournée)
const payloadFormat = JSON.parse(fs.readFileSync(__dirname + "/payload_format.json").toString());

// Exemple de trame
let hexPayload = "10b6002a000000000a0063";

// Essai de la fonction
let decodedPayload = decode_hex_payload(hexPayload, payloadFormat);
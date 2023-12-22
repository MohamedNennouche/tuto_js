/*
    L'objectif de ce script est de créer une fonction permettant de convertir une chaîne de caractères hexadécimaux formatée comme celle dans laquelle le capteur enregistre ses données en sortie console lisible.

    10 b600 2a00 0000 00 0a00 63
*/

const fs = require("fs"); // to read files (file system for Javascript)


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

// Utilisation de la fonction

// Lecture du fichier JSON est extraction de l'objet (On transforme en string car la sortie par défaut de readFileSync est binaire, JSON.parse transforme en objet la chaine de caractères retournée)
const payloadFormat = JSON.parse(fs.readFileSync(__dirname + "/payload_format.json").toString());

// Exemple de trame
let hexPayload = "10b6002a000000000a0063";

// Essai de la fonction
let decodedPayload = decode_hex_payload(hexPayload, payloadFormat);
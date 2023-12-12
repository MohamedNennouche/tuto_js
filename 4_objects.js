// Fichier pour la manipualation basique d'un objet qu'on crée

let identite = {
    "nom" : "Nennouche",
    "prenom" : "Mohamed",
    "adresse" : "5 rue Marseille",
    "genre" : "Homme",
    "age" : 24
};

console.log(identite);

// Accéder à un des champs
console.log(identite["nom"]);

// Modifier la valeur d'un champ
identite["age"] = 25;
console.log(identite);

// Ajouter un nouveau champ
identite["Emploi"] = "Chercheur";
console.log(identite)

// Suppression d'un champ
delete(identite["adresse"]);
console.log(identite);
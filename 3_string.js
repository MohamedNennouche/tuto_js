// fichier pour la manipulation basique des chaînes de caractères avec JavaScript

// déclaration d'une chaine de caractères
let x = "Hello world";
console.log(x);

// accéder à une des lettres
let lettre = x[3];
console.log(lettre);

// Longueur d'une chaine de caractères
console.log(x.length)

// Concaténation de deux chaines de caractères
let partie_1 = "Hello"
let partie_2 = " World"
let mot_complet = partie_1 + partie_2
console.log(mot_complet)

// Prendre une partie d'une chaine de caractère
let partie = mot_complet.substring(3,7);
console.log(partie);

// Extraire un entier d'une chaine de caractère
let chaine = "122456";
let entier = parseInt(chaine, 10); // décimal
console.log(entier);
let chaineHexa = "1ab24";
let entier_hexa = parseInt(chaineHexa, 16);
console.log("Hexa :",entier_hexa);

// Extraire un réel d'une chaine de caractères
let chaine_reel = "12.59";
let reel = parseFloat(chaine_reel, 10);
console.log(reel);
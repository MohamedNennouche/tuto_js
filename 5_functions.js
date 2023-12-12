// Fichier d"crivant la création et l'appel d'une fonction 

// déclaration

const calculMoyenne = function(valeur1, valeur2) {
    let moyenne = (valeur1 + valeur2)/2;

    return moyenne;
}

// appel de la fonction

let x = 2;
let y = 7;

let moy = calculMoyenne(x,y);

console.log(moy);
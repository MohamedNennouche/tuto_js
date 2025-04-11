// fichier pour la manipulation d'un tableau 

let x = [1, 2, 3, 4, 5, 6];

// Affichage du tableau
console.log(x);

// Sélectionner un indice en particulier
let y = x[3]; // 4ème élément
console.log("x[3] =",y);

// Avoir la taille du tableau
console.log(x.length);

// Ajouter un élément
x.push(89);
console.log("En ajoutant l'élément 89 :", x);

// Pour éliminer le dernier élément
x.pop()
console.log("En éliminant à nouveau le dernier élément :", x);

// Pour prendre une partie du tableau
y = x.slice(1,4);
console.log("Tableau x complet :", x, "\nSlice [1,4] :", y);
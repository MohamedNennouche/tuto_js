# Tutoriel JavaScript
## 1. Hello world en JS
On utilise la fonction `console.log()` qui permet l'affichage d'un message dans le terminal. 
```js
console.log("Hello world");
```
## 2. Variables
### 2.1 Déclaration des variables
Pour déclarer une variable on utilise le mot clé `let` suivi du nom de la variable et on peut ajouter accessoirement une valeur initiale. 
```js
let name = value;
```
### 2.2 Manipulation des variables
On peut effectuer toutes les opérations arithmétiques sur les variables: addition, soustraction, multiplication, division, exponentiation, etc...
```js
let x = 1;
let y = 2;
x += 1; // incrémentation
x = x + 1; // incrémentation
x = x + y; // addition
x = x * y; // multiplication
x = x / y; // division
```
### 2.3 Les tableaux
On déclare un tableau en JS exactement de la même façon qu'une variable classique
```js
let name = [value1, value2, value3];
```
Par exemple: 
```js
let x = [1, 2, 3];
```
Pour accéder aux éléments du tableau il faut passer par l'indice de l'élément (attention les indices commencent à partir de 0)
```js
let y = x[indice];
```
Pour avoir la longueur du tableau on utilise la propriété `.length`
```js
let y = x.length;
```
Pour ajouter un élément au tableau on peut utiliser la fonction `.push(value)`
```js
x.push(value);
```
On peut aussi éliminer le dernier élément du tableau avec la fonction `.pop()`
```js
x.pop();
```
On peut aussi prendre une partie d'un tableau au préalable créé avec la fonction `.slice(start, end)`
```js
x = x.slice(0,3);
```
### 2.4 Chaînes de caractères
Les chaînes de caractères sont un type de variables particulier, mais se déclarent exactement de la même manière
```js
let x = "value";
```
On peut aussi accéder à chaque lettre de la chaîne via son indice
```js
let y = x[indice];
```
On peut aussi avoir la longueur de la chaîne de caractères utilisant la fonction `.length()`
```js
x.length();
```
On peut aussi concaténer plusieurs chaînes de caractères avec l'opération addition `+`
```js
let x = "Hello";
let y = " World";
let z = x + y; // "Hello World"
```
On peut aussi extraire une partie d'une chaîne de caractères avec la fonction `.substring(firstIncluded, lastNotIncluded)`
```js
y = x.substring(1,4);
```
Souvent en manipulant des chaînes de caractères on se retrouve dans la situation où on veut extraire les nombre qui sont à l'intérieur pour se faire on utilise habituellement deux fonctions `parseInt(string, base)` et `parseFloat(string, base)`. `parseInt()` permet d'extraire un nombre entier et ignorera tous les caractères non numériques. `parseFloat()` fait exactement la même chose à la différence qu'elle peut extraire les nombres réels. Bien sûr, on définit la base: binaire, octal, décimal, ou hexadécimal. 
```js
y = parseInt(x, 16); // hexadécimal
z = parseFloat(x, 10); // décimal
```
### 2.5 Objets
Les objets sont des structures de données plus complexes. Elles peuvent regrouper plusieurs champs, par exemple une date de naissance regroupant le jour, le mois, et l'année de naissance. Ils se déclarent sensiblement de la même manière qu'une structure simple.
```js
let x = {
    propertyName1 : propertyValue1;
    propertyName2 : propertyValue2;
};
```
On peut accéder à chaque champ de cette variable comme un indice 
```js
x["propertyName1"];
```
On peut aussi bien sûr modifier la valeur d'un des champ
```js
x["propertyName2"] = newValue;
```
On peut aussi ajouter un nouveau champ à notre variable avec sa valeur
```js
x["newPropertyName"] = newPropertyValue;
```
On peut aussi supprimer un champ avec la fonction `delete()`
```js
delete(x["propertyName1"]);
```
## 3. Fonctions
Les fonctions sont des structures de données permettant de déclarer un ensemble d'actions qui peuvent être ensuite réutilisées en l'appelant au lieu de réécrire toutes les instructions. Structurer son code sous forme de fonctions est une bonne pratique en programmation. 
### 3.1 Déclaration d'une fonction
On déclare une fonction avec la syntaxe suivante
```js
const functionName = function(paramName1, paramName2) {
    function body;
    return value; // optionnel elle peut ne rien retourner
}
```
Dans ce cas on a déclaré une fonction prenant 2 paramètres et retournant une valeur


### 3.2 Appel de la fonction
On appelle la fonction en utilisant directement le nom qu'on y a donné
```js
let x = functionName(paramValue1, paramValue2);
```

__Remarque importante :__ Les variables simples sont passées comme valeurs à part pour les objets qui sont passés par adresse. Cela veut dire que les variables de type standard sont copiées et passées à la fonction et par conséquent leur valeur n'est pas modifiée en dehors de la fonction. 
## 4. Structures
Dans un programme informatique on a souvent recours à des structures pour effectuer des conditions pour faire ou non une action (structures conditionnelles) ou de répéter une action un certain nombre fois (boucles).
### 4.1 Structures conditionnelles
Il existe fondamentalement deux types de structures conditionnelles en JavaScript, `if else` et `switch`. Avant cela on va aborder comment faire des tests logiques tels que les comparaisons ou les égalités. 
#### 4.1.1 Opérateurs logiques
| Opérateur logique | Equivalent en JS |
|:-:|:-:|
| Egalité | === |
| Négation | !== ou ! |
| Supérieur ou égale | >= |
| Inférieur ou égale | <= |>
#### 4.1.2 If else
Cette structure est utilisée dans le cas où on a une condition claire sur une variable. 
```js
if(condition) {
    body;
};
```
On peut aussi avoir une condition sinon on effectue autre chose
```js
if (condition) {
    body1;
}
else {
    body2;
};
```
On peut aussi bien sûr avoir plusieurs conditions 
```js
if (condition1){
    body1;
}
else if (condition2) {
    body2;
}
else {
    body3;
};
```
#### 4.1.3 Switch
Quand on a plusieurs conditions simples concaténée faisant intervenir des valeurs discretes on peut recourir au `switch` comme suit 
```js
switch(variableName) {
    case variableValue1:
        body1;
        break;
    case variableValue2:
        body2;
        break;
    default: 
        body3;
};
```
### 4.2 Boucles
On utilise habituellement deux types de boucles : on se sert du `for loop` si on veut répeter un bout de code un certain nombre de fois. On se sert du `while loop` si on est dans le cas de : on fait ceci tant que cette condition est valide.  
#### 4.2.1 For loop
La syntaxe est très simple
```js
for(let loopParam = loopStart; loopParam < loopStop; loopParam += loopStep){
    loopBody;
};
```
Où on a : 
- `loopParam` : indice de la boucle
- `loopStart` : valeur initiale de l'indice de la boucle
- `loopStop` : valeur finale à laquelle la boucle doit s'arrêter
- `loopStep` : Pas d'incrémentation de la boucle
#### 4.2.2 While loop
La syntaxe est la suivante 
```js
while(condition){
    loopBody;
};
```

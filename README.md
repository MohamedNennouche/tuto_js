# Tutoriel JavaScript
## 1. Hello world en JS
On utilise la fonction `console.log()` qui permet l'affichage d'un message dans le terminal. 
```js
console.log("Hello world");
```
## 2. Variables
### 2.1 Déclaration de la variable
Pour déclarer une variable on utilise le mot clé `let` suivis du nom de la variable et on peut ajouter accessoirement une valeur initiale. 
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
Les chaînes de caractères sont un type de variables particuliers, elles se déclarent exactement de la même manière
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
On peut aussi concaténer plusieurs chaines de caractères avec l'opération addition `+`
```js
let x = "Hello";
let y = " World";
let z = x + y; // "Hello World"
```
On peut aussi tirer une partie d'une chaîne de caractère avec la fonction `.substring(firstIncluded, lastNotIncluded)`
```js
y = x.substring(1,4);
```
Souvent en manipulant des chaînes de caractères on se retrouve dans la situation où on veut extraire les nombre qui sont à l'intérieur pour se faire on utilise habituellement deux fonctions `parseInt(string, base)` et `parseFloat(string, base)`. `parseInt()` permet d'extraire un nombre entier et ignorera tous les caractères non numériques. `parseFloat()` fait exactement la même chose à la différence qu'elle peut extraire les nombres réels. Bien sur on définit la base: binaire, octal, décimal, ou hexadécimal. 
```js
y = parseInt(x, 16); // hexadécimal
z = parseFloat(x, 10); // décimal
```
### 2.5 Objets
Les objets sont des structures de données plus complexes, elles peuvent regrouper plusieurs champs, par exemple une date de naissance regroupant le jour, le mois, et l'année de naissance. Ils se déclarent sensiblement de la même manière qu'une structure simple.
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

## 4. Structures
### 4.1 Structures conditionnelles
#### 4.1.1 If else
#### 4.1.2 Switch
### 4.2 Boucles
#### 4.2.1 For loop
#### 4.2.2 While loop
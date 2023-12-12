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
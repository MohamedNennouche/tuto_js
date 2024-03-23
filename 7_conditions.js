// code permettant de présenter les différentes structures conditionnelles

// if 
let a = 5 
// condition respectée
if (a == 5) {
    console.log("a = 5")
};
// condition non respectée
if (a == 5) {
    console.log("a == 4")
}

// if else
let b = 4 
if (b == 5) {
    console.log("b = 5")
} else if (b == 3) {
    console.log("b = 3")
} else {
    console.log("b = 4")
}

// switch case

let c = 0 

switch(c) {
    case 0:
        console.log("c'est zero");
        break;
    case 1:
        console.log("c'est un");
        break;
    default: 
        console.log("c'est ni zero ni un");
};
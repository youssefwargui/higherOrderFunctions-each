function each(tab, func) {
    for (var i = 0; i < tab.length; i++) {
        func(tab[i], i)
    }
}

//2

function sumSquares(numbers) {
    var total = 0;
    each(numbers, function (x)){
        total = x + x
    }

    return total;
}

//3
function impairs(numbers) {
    var result = 0
    each(numbers, function (x) ) {
        if (x % 2 !== 0) {
        }
        result +=x
    }
    
}

//4
function sommeDeTousLesÉlémentsMultipliésParQuatre (numbers) { 
var result = 0
 each (numbers , function (n) ) {
    if (n % 4 === 0)
        result += n
 }
 }

 //5

 function doublerTous(nombres) {
 var t = []
 each (nombres , function (n)) {
    t.push(numbers *2) 
 }
 
}

//6
function diviserTousParDeux(nombres) {

 
}

//7

//8


function pairs(nombres) {
 var result = 0
    each(numbers, function (x) ) {
        if (x % 2 === 0) {
        }
        result+=x
    }
}

//9

function multiplesDeTrois(nombres) {
var result = 0
 each (numbers , function (n) ) {
    if (n % 3 === 0)
        result += n
 }
}

//10

function positifs(nombres) {
var result = 0
 each (numbers , function (n) ) {
    if (n <= 0)
        result += n
 }
}




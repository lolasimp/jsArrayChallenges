// console.log()

// Given a string of 2 words, find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc. All letters will be lowercase there will be no punctuation. Display (id='challenge-1') the word that is the highest scoring. If two words score the same, display the word that appears earliest in the original string.

// var challengeOneInput = "jumbo shrimp";  //jumbo=61, shrimp=83 should display shrimp

var productName = "soul glow";  
var spray1
var spray2

var arrayName = productName.split(' ');
console.log(arrayName);
spray1 = arrayName [0]; 
console.log(spray1);
spray2 = arrayName [1];
console.log(spray2);

var spray1score = 0;
var spray2score = 0;

// spray.length is 4
// i++ is i+=1

for(var i = 0 ; i < spray1.length; i++){
    var sprayNumber = (spray1.charCodeAt(i)) - 96;
    spray1score += sprayNumber
}

for(var i = 0 ; i < spray2.length; i++){
    var sprayNumber = (spray2.charCodeAt(i)) - 96;
    spray2score += sprayNumber
}

if(spray1score > spray2score){
    var print = document.getElementById('challenge1');
    print.innerHTML = '<h2>spray1<h2>';
}  else {
    print.innerHTML = '<h2>spray2<h2>';
}

// spray1score = 67
// spray2score = 57




  // for (int j = 0; j <spray1score.length; j++){
    //     total = total + (int)spray1score[j];


//     Challenge #2: Sorting on planet Twisted-3-7
// There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: The values of the digits 3 and 7 are twisted. Our 3 means 7 and 7 means 3.

// Write some code that takes an array of numbers and outputs an array that changes any 3s to 7s and any 7s to 3s.

// var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
// var challengeTwoInputB = [12,13,14];  //[12,17,14];
// var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];


var planets = [1,2,3,4,5,6,7,8,9];
planets[2] = 7;
planets [6] = 3;

var print = document.getElementById("challenge2");
print.innerHTML += planets;

var planets2 = [12,13,14];
planets2[1] = 17;
var print = document.getElementById("challenge2");
print.innerHTML += '<br>' + planets2;

var planets3 = [9,2,4,7,3];
planets3[3] = 3;
planets3 [4] = 7;
var print = document.getElementById("challenge2");
print.innerHTML += '<br>' + planets3;

// if(spray1score > spray2score){
    //     var print = document.getElementById('challenge1');
    //     print.innerHTML = '<h2>Soul<h2>';
    // }  else {
    //     print.innerHTML = '<h2>Glow<h2>';
    // }

// var plant3 = planets.indexOf(3, 7);

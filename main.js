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
    print.innerHTML = '<h2>Soul<h2>';
}  else {
    print.innerHTML = '<h2>Glow<h2>';
}

// spray1score = 67
// spray2score = 57




  // for (int j = 0; j <spray1score.length; j++){
    //     total = total + (int)spray1score[j];

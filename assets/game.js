// Initialize variable
var win = 0;
var loss = 0;
var tries = 9;
var guess; //Guess
var guesses = []; //stored guesses
var correct = 0; //Count correct guesses
var rand;
var progressWord = [];


//background audio
var bgMusic = new Audio('assets/Pokemon8bit.mp3');
bgMusic.play();
//typing keyboard audio
var keybrType = new Audio('assets/keyboard.wav');


//list of pokemon and its sound
function pokemon(title, sound) {
    this.title = title;
    this.sound = sound;
}
var bulbasaur = new Audio('assets/001 - Bulbasaur.wav');
var charmander = new Audio('assets/004 - Charmander.wav');
var squirtle = new Audio('assets/007 - Squirtle.wav');
var butterfree = new Audio('assets/012 - Butterfree.wav');
var pidgey = new Audio('assets/016 - Pidgey.wav');
var clefable = new Audio('assets/036 - Clefable.wav');
var zubat = new Audio('assets/041 - Zubat.wav');
var gloom = new Audio('assets/044 - Gloom.wav');
var machop = new Audio('assets/066 - Machop.wav');

var pokemonList = {
    pokemon1: new pokemon("bulbasaur", bulbasaur),
    pokemon2: new pokemon("charmander", charmander),
    pokemon3: new pokemon("squirtle", squirtle),
    pokemon4: new pokemon("butterfree", butterfree),
    pokemon5: new pokemon("pidgey", pidgey),
    pokemon6: new pokemon("clefable", clefable),
    pokemon7: new pokemon("zubat", zubat),
    pokemon8: new pokemon("gloom", gloom),
    pokemon9: new pokemon("machop", machop),
};

var list = [pokemonList.pokemon1, pokemonList.pokemon2, pokemonList.pokemon3, pokemonList.pokemon4, pokemonList.pokemon5, pokemonList.pokemon6, pokemonList.pokemon7, pokemonList.pokemon8, pokemonList.pokemon8];

//function to choose random word
function chooseWord() {
    rand = Math.floor(Math.random() * list.length);
    return list[rand].title;
}

var magicWord = chooseWord();
console.log("Computer word is: " + magicWord);

//show the "_"
function start() {
    for (var i = 0; i < magicWord.length; i++) {
        progressWord[i] = "_";
    }
    var x = progressWord.join(" ");
    document.getElementById("answer").innerHTML = x;
}

//start the game
start();

//typing mechanics
document.onkeydown = function(event) {

    //choose a letter
    keybrType.play();
    var guess = event.key.toLowerCase();

    //log in history of guess words
    guesses.push(guess);
    document.getElementById("letterGuessed").innerHTML = guesses.join(" ");

    checkLetter(guess);
    checkLives();

}

function checkLetter(letterGuess) {
    // True when letter is found in magicWord else its -1 (false)
    if (magicWord.indexOf(letterGuess) != -1) {

        // check each letter
        for (var i = 0; i < magicWord.length; i++) {

            //when guess letter match a magic word, it will appear screen
            if (magicWord[i] === letterGuess) {
                progressWord[i] = magicWord[i];
                document.getElementById("answer").innerHTML = progressWord.join(" ");
            }
        }
    } else {
        console.log("I type wrong letter");
        tries -= 1;
        document.getElementById("tries").textContent = tries;
    }
}

function checkLives() {
    //Win when there are no '_' left else you lose
    if (progressWord.indexOf('_') == -1) {
        win++;
        document.getElementById("win").textContent = win;
        list[rand].sound.play();
        reset();
        console.log(magicWord);

        //lose
    } else if (tries <= 0) {
        loss++;
        document.getElementById("loss").textContent = loss;
        reset();
        console.log(magicWord);


    }
}

function reset() {
    magicWord = chooseWord();
    tries = 9;
    document.getElementById("tries").textContent = tries;
    progressWord = [];
    guesses = [];
    document.getElementById("letterGuessed").innerHTML = guesses.join(" ")
    start();

    //magicWord = chooseWord();
}


// THINGS TO DO
//-RESET GAME

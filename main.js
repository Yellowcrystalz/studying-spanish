import vocab from "./vocab.json" assert { type: "json" };

function getRandomInt() {
    return Math.floor(Math.random() * vocab.length);
}

function readAnswers() {
    conjAnswer = conjugation.value;
    defAnswer = definition.value;
}

function writeAnswers() {
    console.log(`Your conjugation: ${conjAnswer}`);
    console.log(`Your definition: ${defAnswer}`);
}

function writeKey() {
    console.log(`The conjugation: ${vocabWord.conjugation[subjectIndex]}`);
    console.log(`The definion: ${vocabWord.definition}`);
}

function checkAnswers() {
    if (
        conjAnswer === vocabWord.conjugation[subjectIndex] &&
        defAnswer === vocabWord.definition
    ) {
        console.log("You were right");
    } else {
        console.log("You were wrong");
    }
}

const vocabTitle = document.querySelector("#vocab");
const vocabIndex = Math.floor(Math.random() * vocab.length);
const vocabWord = vocab[vocabIndex];

const subjectArr = ["yo", "tu", "él", "nosotros", "ellos"];
const subjectIndex = Math.floor(Math.random() * subjectArr.length);

const conjugation = document.querySelector("#conjugation");
let conjAnswer;

const definition = document.querySelector("#definition");
let defAnswer;

const btn = document.querySelector("#btn");

vocabTitle.innerText = vocabWord.name + ` (${subjectArr[subjectIndex]})`;

btn.addEventListener("click", readAnswers);
btn.addEventListener("click", writeAnswers);
btn.addEventListener("click", writeKey);
btn.addEventListener("click", checkAnswers);

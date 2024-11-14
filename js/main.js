const inputName = document.querySelector(".start_input");

const userForm = document.querySelector(".name_form");
const category = document.querySelector(".allcards");
const firstSection = document.querySelector(".start_section");

const geographyCategory = document.querySelector(".geography");
const moviesCategory = document.querySelector(".movies");
const musicCategory = document.querySelector(".music");
const randomCategory = document.querySelector(".random");

const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");

const difficultyLevel = document.querySelector(".difficultlevel");

const questionDiv = document.querySelector(".questiondiv");
const questionBtn = document.querySelector(".question_button");
const questionCounter = document.querySelector(".question_counter");
const question = document.querySelector(".question_h2");
const answers = document.querySelector(".question");
const timer = document.querySelector(".timer");
const timeOut = document.querySelector(".timeOut");



import { shuffle } from "./shuffle.js";
import { createBar } from "./createBar.js";

let categoryChoice = "";
let difficulty = "";
let roundTracker = 0;
let quizData;
let pointsTracker = 0;
let difficultyPoints;

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("name", inputName.value);

    firstSection.style.display = "none";
    category.style.display = "flex";
});

geographyCategory.addEventListener("click", () => {
    difficultyLevel.style.display = "flex";
    category.style.display = "none";
    categoryChoice = "22";
});

moviesCategory.addEventListener("click", () => {
    difficultyLevel.style.display = "flex";
    category.style.display = "none";
    categoryChoice = "11";
});
musicCategory.addEventListener("click", () => {
    difficultyLevel.style.display = "flex";
    category.style.display = "none";
    categoryChoice = "12";
});
randomCategory.addEventListener("click", () => {
    difficultyLevel.style.display = "flex";
    category.style.display = "none";
    categoryChoice = "0";
});

easy.addEventListener("click", () => {
    difficultyPoints = 1000;
    difficulty = "easy";
    createBar();
    runner(categoryChoice, difficulty);
});
medium.addEventListener("click", () => {
    difficultyPoints = 1500;
    difficulty = "medium";
    createBar();
    runner(categoryChoice, difficulty);
});
hard.addEventListener("click", () => {
    difficultyPoints = 2000;
    difficulty = "hard";
    createBar();
    runner(categoryChoice, difficulty);
});

questionBtn.addEventListener("click", () => {
    roundTracker++;
    timeOut.innerHTML = '<div class="timer"><div class="timer_inside"></div></div>'

    createBar();
    quizDisplay(quizData.results);
    
});

async function quizGetter(categoryChoice, difficulty) {
    const quizAPI = `https://opentdb.com/api.php?amount=10&category=${categoryChoice}&type=multiple&difficulty=${difficulty}`;
    try {
        const quiz = await fetch(quizAPI);

        if (!quiz.ok) {
            throw new Error("HTTP ERROR status: " + quiz.status);
        }
        const data = await quiz.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function runner(categoryChoice, difficulty) {
    difficultyLevel.style.display = "none";
    questionDiv.style.display = "inline";

    quizData = await quizGetter(categoryChoice, difficulty);
    quizDisplay(quizData.results);
}

function quizDisplay(data) {
    const stringedData = JSON.stringify(data);
    const parsedData = stringedData
        .replace(/&atilde;/g, "ã")
        .replace(/&oacute/g, "ó")
        .replace(/&Uuml;/g, "Ü")
        .replace(/&Eacute;/g, "É")
        .replace(/&iacute;/g, "í")
        .replace(/&quot;/g, "")
        .replace(/&#039;/g, "'")
        .replace(/&ldquo;/g, "'")
        .replace(/&rsquo;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/&lrm;/g, "")
        .replace(/&rdquo;/g, "'")
        .replace(/&ouml;/g, "ö");
    const processedData = JSON.parse(parsedData);

    question.textContent = processedData[roundTracker].question;
    const correctAnswer = processedData[roundTracker].correct_answer;

    questionCounter.textContent = `Question ${roundTracker + 1}/10`;

    const randomizer = [
        processedData[roundTracker].correct_answer,
        processedData[roundTracker].incorrect_answers[0],
        processedData[roundTracker].incorrect_answers[1],
        processedData[roundTracker].incorrect_answers[2],
    ];

    shuffle(randomizer);

    answers.innerHTML = `
                        <li class="answerBox">${randomizer[0]}</li>
                        <li class="answerBox">${randomizer[1]}</li>
                        <li class="answerBox">${randomizer[2]}</li>
                        <li class="answerBox">${randomizer[3]}</li>
                        `;

    const liList = document.querySelectorAll(".answerBox");

    liList.forEach((element) => {
        element.addEventListener("click", (event) => {
            answers.innerHTML = `
                            <li class="answerBox box1">${randomizer[0]}</li>
                            <li class="answerBox box1">${randomizer[1]}</li>
                            <li class="answerBox box1">${randomizer[2]}</li>
                            <li class="answerBox box1">${randomizer[3]}</li>
                            `;
            const newLiList = document.querySelectorAll(".answerBox");

            for (let i = 0; i < newLiList.length; i++) {
                if (newLiList[i].textContent === element.textContent) {
                    newLiList[i].classList.add("highOpacity");
                }
            }

            colorizer(newLiList);

            if (event.target.textContent === correctAnswer) {
                console.log(`${correctAnswer} is correct!`);
                pointsTracker += difficultyPoints;
            } else {
                console.log(`Filip > Emil!`);
            }
        });
    });

    console.log(pointsTracker);

    function colorizer(newLiList) {
        for (let i = 0; i < newLiList.length; i++) {
            newLiList[i].classList.add("newOpacity");
            if (newLiList[i].textContent === correctAnswer) {
                newLiList[i].style.background = "green";
            } else {
                newLiList[i].style.background = "red";
            }
        }
    }
}

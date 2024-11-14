const inputName = document.querySelector(".start_input");
const inputBtn = document.querySelector(".start_button");

const userForm = document.querySelector(".name_form");
const category = document.querySelector(".allcards");
const firstSection = document.querySelector(".start_section");

const geographyCategory = document.querySelector(".geography")
const moviesCategory = document.querySelector(".movies");
const musicCategory = document.querySelector(".music");
const randomCategory = document.querySelector(".random");

const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');

const difficultyLevel = document.querySelector('.difficultlevel');

const questionDiv = document.querySelector(".questiondiv");
const questionBtn = document.querySelector(".question_button");
const question = document.querySelector(".question_h2")
const answers = document.querySelector(".question")

let categoryChoice = "";
let difficulty = "";
let roundTracker = 0;
let quizData;

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("name", inputName.value);
    
    firstSection.style.display = "none";
    category.style.display = "flex";
});

geographyCategory.addEventListener("click",  () =>{

    difficultyLevel.style.display = 'flex';
    category.style.display = 'none';
    categoryChoice = "22";  
    
})    

moviesCategory.addEventListener("click", () => {

    difficultyLevel.style.display = 'flex';
    category.style.display = 'none';
    categoryChoice = "11";  
})  
musicCategory.addEventListener("click", () => {

    difficultyLevel.style.display = 'flex';
    category.style.display = 'none';
    categoryChoice = "12";  
})  
randomCategory.addEventListener("click", () => {

    difficultyLevel.style.display = 'flex';
    category.style.display = 'none';
    categoryChoice = "0";  
})  

easy.addEventListener('click', () => {
    difficulty = "easy";
    runner(categoryChoice,difficulty);
})
medium.addEventListener('click', () => {
    difficulty = "medium";
    runner(categoryChoice,difficulty);
})
hard.addEventListener('click', () => {
    difficulty = "hard";
    runner(categoryChoice,difficulty);
})

questionBtn.addEventListener("click", () => {
    roundTracker++;
    quizDisplay(quizData.results);
})

async function quizGetter(categoryChoice, difficulty) {

    const quizAPI = `https://opentdb.com/api.php?amount=10&category=${categoryChoice}&type=multiple&difficulty=${difficulty}`;
    try {
        const quiz = await fetch(quizAPI);

        if(!quiz.ok) {
            throw new Error("HTTP ERROR status: " + quiz.status);
        }
        const data = await quiz.json();
        return data;

    }catch(error){
        console.error(error);
    }
}


async function runner(categoryChoice, difficulty ) {
    difficultyLevel.style.display = "none";
    questionDiv.style.display = "inline";

    quizData = await quizGetter(categoryChoice,difficulty);
    quizDisplay(quizData.results);
    
}

function quizDisplay (data){
    const stringedData = JSON.stringify(data);
    const parsedData = stringedData.replace(/&atilde;/g, "ã").replace(/&oacute/g, "ó").replace(/&Uuml;/g, "Ü").replace(/&Eacute;/g, "É").replace(/&iacute;/g,'í').replace(/&quot;/g, '').replace(/&#039;/g, "'").replace(/&ldquo;/g, "'").replace(/&rsquo;/g, "'").replace(/&amp;/g, "&").replace(/&lrm;/g, "").replace(/&rdquo;/g, "'").replace(/&ouml;/g, "ö");
    const processedData = JSON.parse(parsedData);

    question.textContent = processedData[roundTracker].question;
    const correctAnswer = processedData[roundTracker].correct_answer;

    const randomizer = [processedData[roundTracker].correct_answer,
                        processedData[roundTracker].incorrect_answers[0],
                        processedData[roundTracker].incorrect_answers[1],
                        processedData[roundTracker].incorrect_answers[2]];

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
            if(event.target.textContent === correctAnswer) {
                console.log(`${correctAnswer} is correct!`)
            }else {
                console.log("Wrong answer!")
            }
        })
    })
    console.log(processedData);
}

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
    }
}
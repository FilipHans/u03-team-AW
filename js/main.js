const inputName = document.querySelector(".start_input");
const inputBtn = document.querySelector(".start_button");

const userForm = document.querySelector(".name_form")
const category = document.querySelector(".allcards")
const firstSection = document.querySelector(".start_section");

const geographyCategory = document.querySelector(".geography")
const moviesCategory = document.querySelector(".movies")
const musicCategory = document.querySelector(".music")
const randomCategory = document.querySelector(".random")

const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');

const difficultyLevel = document.querySelector('.difficultlevel')

let categoryChoice = "";
let difficulty = "";

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
    
})
medium.addEventListener('click', () => {
    difficulty = "medium";

})
hard.addEventListener('click', () => {
    difficulty = "hard";
    console.log(difficulty)

})

async function quizGetter(categoryChoice, difficulty) {

    const quizAPI =  fetch(`https://opentdb.com/api.php?amount=10&category=${categoryChoice}&type=multiple&difficulty=${difficulty}`);

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

    
    const data = await quizGetter(categoryChoice,difficulty);

    quizPrinter(data)
    
}

function quizDisplay (data){


}
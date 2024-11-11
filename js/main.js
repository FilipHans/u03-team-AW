const inputName = document.querySelector(".start_input");
const inputBtn = document.querySelector(".start_button");
const userForm = document.querySelector(".name_form")
const category = document.querySelector(".allcards")
const firstSection = document.querySelector(".start_section");
const geographyCategory = document.querySelector(".geography")
const moviesCategory = document.querySelector(".movies")
const musicCategory = document.querySelector(".music")
const randomCategory = document.querySelector(".random")


let categorychoice = "";

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("name", inputName.value);
    
    firstSection.style.display = "none"
    category.style.display = "flex"  

    
});


geographyCategory.addEventListener("click", function (event){
    categorychoice = "1";  
    console.log(categorychoice); 
})    

moviesCategory.addEventListener("click", function (event){
    categorychoice = "2";  
    console.log(categorychoice); 
})  

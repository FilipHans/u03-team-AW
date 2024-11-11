const inputName = document.querySelector(".start_input");
const inputBtn = document.querySelector(".start_button");
const userForm = document.querySelector(".name_form")
const category = document.querySelector(".allcards")
const firstSection = document.querySelector(".start_section");
const categoryBox = document.querySelectorAll(".categorybox")

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("name", inputName.value);
    
    firstSection.style.display = "none"
    category.style.display = "flex"  

    
});

categoryBox.forEach((element) => {
element.addEventListener("click", function (){
   
})    
})


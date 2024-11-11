const inputName = document.querySelector(".start_input");
const inputBtn = document.querySelector(".start_button");
const userForm = document.querySelector(".name_form")


userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("name", inputName.value);
});


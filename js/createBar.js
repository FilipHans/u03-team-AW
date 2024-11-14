const timer = document.querySelector(".timer");
const timeOut = document.querySelector(".timeOut");

export function createBar() {
    timer.innerHTML = `<div class="timer_inside"></div>`;
    setTimeout( () => {

        timeOut.textContent = "To slow!";
        console.log("to slow")
    }, 10000)
}
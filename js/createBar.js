const timer = document.querySelector(".timer");
const timeOut = document.querySelector(".timeOut");
export let barTimer;

export function createBar() {
    timer.innerHTML = `<div class="timer_inside"></div>`;
    barTimer = setTimeout( () => {

        timeOut.textContent = "To slow!";
        console.log("to slow")
        
    }, 10000)
}
import Timer from "./Timer.js";

new Timer(
    document.querySelector(".timer"), 25
);

const shortBreak = document.querySelector("#short-break");
const longBreak = document.querySelector("#long-break");
const clock = document.querySelector("#clock");

shortBreak.addEventListener("click", () => {
    shortBreak.classList.add("active")
    longBreak.classList.remove("active");
    clock.classList.remove("active");
    new Timer(document.querySelector(".timer"), 5);
})

clock.addEventListener("click", () => {
    shortBreak.classList.remove("active")
    longBreak.classList.remove("active");
    clock.classList.add("active");
    new Timer(
        document.querySelector(".timer"), 25
    );
})

longBreak.addEventListener("click", () => {
    shortBreak.classList.remove("active")
    longBreak.classList.add("active");
    clock.classList.remove("active");
    new Timer(document.querySelector(".timer"), 15);
})
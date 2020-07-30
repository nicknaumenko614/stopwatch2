let timer = 0;
let timerSwitch = "off";
const screen = document.querySelector(".display");
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");

function startTimer() {
  setInterval(() => {
    if (timerSwitch === "on") timer++;
    screen.innerText = timer;
  }, 10);
}

startButton.addEventListener("click", () => {
  timerSwitch = "on";
});

pauseButton.addEventListener("click", () => {
  timerSwitch = "off";
});

resetButton.addEventListener ("click", () => {
    timerSwitch = "off"
    timer = 0;
})

startTimer();

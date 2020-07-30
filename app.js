let timer = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerSwitch = "off";
const screen = document.querySelector(".display");
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");

function startTimer() {
  setInterval(() => {
    if (timerSwitch === "on") timer++;
    minutes = Math.floor(timer / 6000);
    seconds = Math.floor((timer % 6000) / 100);
    milliseconds = Math.floor(timer % 100);
    screen.innerText =
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds +
      "." +
      (milliseconds < 10 ? "0" : "") +
      milliseconds;
  }, 10);
}

startButton.addEventListener("click", () => {
  timerSwitch = "on";
});

pauseButton.addEventListener("click", () => {
  timerSwitch = "off";
});

resetButton.addEventListener("click", () => {
  timerSwitch = "off";
  timer = 0;
});

startTimer();

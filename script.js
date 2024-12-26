let elapsedSeconds = 0;
let timerInterval = null;
let isRunning = false;


const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');


function updateDisplay() {
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  const hoursStr = hours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');
  const secondsStr = seconds.toString().padStart(2, '0');

  timerDisplay.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
}


startBtn.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      updateDisplay();
    }, 1000);
  }
});


pauseBtn.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
});


resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedSeconds = 0;
  updateDisplay();
});


updateDisplay();

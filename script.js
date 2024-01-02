let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let laps = 1;

function startPause() {
  if (isRunning) {
    clearInterval(timer);
    document.querySelector('button').textContent = 'Resume';
  } else {
    timer = setInterval(updateTime, 1000);
    document.querySelector('button').textContent = 'Pause';
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  laps = 1;
  updateDisplay();
  document.querySelector('button').textContent = 'Start';
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  const lapTime = formatTime();
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${laps}: ${lapTime}`;
  document.getElementById('laps').appendChild(lapItem);
  laps++;
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').textContent = formatTime();
}

function formatTime() {
  const pad = (num) => (num < 10 ? '0' + num : num);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

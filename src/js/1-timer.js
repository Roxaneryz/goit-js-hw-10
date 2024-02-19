import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay(timeLeft) {
  const daysElement = document.querySelector('[data-days]');
  const hoursElement = document.querySelector('[data-hours]');
  const minutesElement = document.querySelector('[data-minutes]');
  const secondsElement = document.querySelector('[data-seconds]');

  daysElement.textContent = addLeadingZero(timeLeft.days);
  hoursElement.textContent = addLeadingZero(timeLeft.hours);
  minutesElement.textContent = addLeadingZero(timeLeft.minutes);
  secondsElement.textContent = addLeadingZero(timeLeft.seconds);
}
function startTimer() {
  const difference = userSelectedDate - Date.now();


    clearInterval(timerInterval);
    updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    iziToast.success({
      title: 'Countdown Finished',
      message: 'The countdown timer has reached the end date!',
    });
    return;
  }

  const timeLeft = convertMs(difference);
  updateTimerDisplay(timeLeft);

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    if (selectedDates[0] < new Date()) {
      
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    
      document.getElementById('startButton').disabled = true;
    } else {
      
      userSelectedDate = selectedDates[0];
      
      document.getElementById('startButton').disabled = false;
    }
  },
});


document.getElementById('startButton').addEventListener('click', () => {
  
  document.getElementById('startButton').disabled = true;
  document.getElementById('datetime-picker').disabled = true;
  
  startTimer();
  timerInterval = setInterval(startTimer, 1000);
});

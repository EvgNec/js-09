import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('button[data-start]')
const daysOutput = document.querySelector('[data-days]')
const hoursOutput = document.querySelector('[data-hours]')
const minutesOutput = document.querySelector('[data-minutes]')
const secondsOutput = document.querySelector('[data-seconds]')

startBtn.disabled = 'disabled'

let timerId = null

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (this.selectedDates[0] > Date.now()) {
        startBtn.disabled = null
      } else {
        return Notiflix.Notify.failure('Please choose a date in the future');
      }
    },
}

const fp = flatpickr(inputEl, options)


function addLeadingZero(value) {
  return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const mins = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const secs = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, mins, secs };
}

const timer = {
  start() {
      let selectedTime = fp.selectedDates[0].getTime();
      let currentTime = Date.now()
      timerId = setInterval(() => {

      currentTime = Date.now()
      const deltaTime = selectedTime - currentTime
      const { days, hours, mins, secs } = convertMs(deltaTime)

      daysOutput.textContent = days
      hoursOutput.textContent = hours
      minutesOutput.textContent = mins
      secondsOutput.textContent = secs
      // let sum = (Number(days) + Number(hours) + Number(mins) + Number(secs))

        if (deltaTime <= 1000) {
          clearInterval(timerId)
        }

      }, 1000)


    startBtn.disabled = 'disabled'
    }
  }

startBtn.addEventListener('click', timer.start)

// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';



// const myInput = document.getElementById('datetime-picker');
// myInput.value=Date.now();
// const btnStart = document.querySelector('button[data-start]');
// let isActive = false;

// const date = new Date();
// const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень',
//     'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень',
//     'Жовтень', 'Листопад', 'Грудень'];

//  console.log("namesOfMonth[date.getMonth()]", namesOfMonth[date.getMonth()])


// flatpickr("#datetime-picker",{
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
//     minDate: "today",
//         "disable": [
//         function(date) {
//             // return true to disable
//             return (date.getDay() === 0 || date.getDay() === 6);
//         }],
// });

// // btnStart.addEventListener('click', startTimer);

// function startTimer() {
//     if (isActive) {return;}
//     console.log("myInput.value", myInput.value)
//     isActive = true;
// }


// // Встановіть дату, до якої хочете обчислити час
// const targetDate = new Date('2024-12-31T00:00:00');

// // Функція для обчислення часу до дати
// function calculateTimeToDate(targetDate) {
//     const now = new Date();
//     const timeDifference = targetDate - now;

//     const secondsInMillisecond = 1000;
//     const minutesInMillisecond = secondsInMillisecond * 60;
//     const hoursInMillisecond = minutesInMillisecond * 60;
//     const daysInMillisecond = hoursInMillisecond * 24;

//     const days = Math.floor(timeDifference / daysInMillisecond);
//     const hours = Math.floor((timeDifference % daysInMillisecond) / hoursInMillisecond);
//     const minutes = Math.floor((timeDifference % hoursInMillisecond) / minutesInMillisecond);
//     const seconds = Math.floor((timeDifference % minutesInMillisecond) / secondsInMillisecond);

//     return {
//         days: days,
//         hours: hours,
//         minutes: minutes,
//         seconds: seconds
//     };
// }
// // Викликаємо функцію і виводимо результат
// let timeRemaining = calculateTimeToDate(targetDate);
// console.log(`Залишилося ${timeRemaining.days} днів, ${timeRemaining.hours} годин, ${timeRemaining.minutes} хвилин, ${timeRemaining.seconds} секунд до цільової дати.`);


// const myR = document.querySelector('.js-timer');
// const timerDays = document.querySelector('span.value[data-days]');
// const timerHours = document.querySelector('span.value[data-hours]');
// const timerMinutes = document.querySelector('span.value[data-minutes]');
// const timerSeconds = document.querySelector('span.value[data-seconds]');
// btnStart.addEventListener('click', startR);
// function startR() {
//     setInterval(recl, 1000);
//         console.log('1');
// }
 
// function recl() {
//     console.log('2');
//     timeRemaining = calculateTimeToDate(targetDate);
//     myR.textContent = `Залишилося ${timeRemaining.days} днів, ${timeRemaining.hours} годин, ${timeRemaining.minutes} хвилин, ${timeRemaining.seconds} секунд до цільової дати.`;

// timerDays.textContent = `${timeRemaining.days}`;
// timerHours.textContent = `${timeRemaining.hours}`;
// timerMinutes.textContent = `${timeRemaining.minutes}`;
// timerSeconds.textContent = `${timeRemaining.seconds}`;
// };

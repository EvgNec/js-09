import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const myInput = document.getElementById('datetime-picker');
myInput.value=Date.now();
const btnStart = document.querySelector('button[data-start]');
let isActive = false;

const date = new Date();
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень',
    'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень',
    'Жовтень', 'Листопад', 'Грудень'];

 console.log("namesOfMonth[date.getMonth()]", namesOfMonth[date.getMonth()])


flatpickr("#datetime-picker",{
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today",
        "disable": [
        function(date) {
            // return true to disable
            return (date.getDay() === 0 || date.getDay() === 6);
        }],
});

btnStart.addEventListener('click', startTimer);

function startTimer() {
    if (isActive) {return;}
    console.log("myInput.value", myInput.value)
    isActive = true;
}


// Встановіть дату, до якої хочете обчислити час
const targetDate = new Date('2024-12-31T00:00:00');

// Функція для обчислення часу до дати
function calculateTimeToDate(targetDate) {
    const now = new Date();
    const timeDifference = targetDate - now;

    const secondsInMillisecond = 1000;
    const minutesInMillisecond = secondsInMillisecond * 60;
    const hoursInMillisecond = minutesInMillisecond * 60;
    const daysInMillisecond = hoursInMillisecond * 24;

    const days = Math.floor(timeDifference / daysInMillisecond);
    const hours = Math.floor((timeDifference % daysInMillisecond) / hoursInMillisecond);
    const minutes = Math.floor((timeDifference % hoursInMillisecond) / minutesInMillisecond);
    const seconds = Math.floor((timeDifference % minutesInMillisecond) / secondsInMillisecond);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// Викликаємо функцію і виводимо результат
const timeRemaining = calculateTimeToDate(targetDate);
console.log(`Залишилося ${timeRemaining.days} днів, ${timeRemaining.hours} годин, ${timeRemaining.minutes} хвилин, ${timeRemaining.seconds} секунд до цільової дати.`);




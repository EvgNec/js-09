import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const myInput = document.getElementById('datetime-picker');
myInput.value=Date.now();
const btnStart = document.querySelector('button[data-start]');
let isActive = false;

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



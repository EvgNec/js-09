import Notiflix from 'notiflix';

const refs = {
  delayInp: document.querySelector("input[name=delay]"),
  stepInp: document.querySelector("input[name=step]"),
  amountInp: document.querySelector("input[name=amount]"),
form: document.querySelector('.form'),
}
refs.form.addEventListener('submit', run);


function createPromise(position, newDelay) {
  const shouldResolve = Math.random() > 0.5;
    return new Promise((resolve, reject) => {
        if (shouldResolve) {
         return resolve({position, newDelay})
        } else {
         return reject({position, newDelay})
        }
  })
}

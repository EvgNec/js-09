import Notiflix from 'notiflix';

// const refs = {
//   delayInp: document.querySelector("input[name=delay]"),
//   stepInp: document.querySelector("input[name=step]"),
//   amountInp: document.querySelector("input[name=amount]"),
//   // formSubmit: document.querySelector(".form"),
// }
const form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, name) => {
    console.log("name", name);
    console.log("value", value);
  })
})

// function test() {

//  }



// Notiflix.Notify.success('Sol lucet omnibus');

// Notiflix.Notify.failure('Qui timide rogat docet negare');

// Notiflix.Notify.warning('Memento te hominem esse');

// Notiflix.Notify.info('Cogito ergo sum');


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
    }

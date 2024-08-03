  console.log("Starting server")

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing server...");
    const backendData = {
      server: 'aws',
      port: 1234,
      status: 'running',
    }  
    resolve(backendData)
   }, 2000)
});

p.then((data) => {
    console.log("data", data)
    console.log("Promis resolved");
 })






// import Notiflix from 'notiflix';

// const refs = {
//   delayInp: document.querySelector('input[name=delay]'),
//   stepInp: document.querySelector('input[name=step]'),
//   amountInp: document.querySelector('input[name=amount]'),
//   form: document.querySelector('.form'),
// };

// refs.form.addEventListener('submit', e => {
//   e.preventDefault();
//   const form = e.currentTarget;
//   let delay = +form['delay'].value;
//   const amount = +form['amount'].value;
//   const step = +form['step'].value;
//   for (let i = 1; i <= amount; i++) {
//     const firstDelay = delay;
//     let newDelay = (delay += step);
//     createPromise(i, firstDelay, newDelay)
//       .then(({ position, newDelay }) => {        
//         setTimeout(() => {
//           Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${newDelay}ms`);
//         }, newDelay);
//       })
//       .catch(({ position, newDelay }) => {
//         setTimeout(() => {
//           Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${newDelay}ms`);
//         }, newDelay);
//       });
//   }


// });

// function createPromise(position, newDelay) {
//   const shouldResolve = Math.random() > 0.5;
//   return new Promise((resolve, reject) => {
//     if (shouldResolve) {
//       return resolve({ position, newDelay });
//     } else {
//       return reject({ position, newDelay });
//     }
//   });
// }

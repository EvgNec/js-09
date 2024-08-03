import Notiflix from 'notiflix';

const refs = {
  delayInp: document.querySelector('input[name=delay]'),
  stepInp: document.querySelector('input[name=step]'),
  amountInp: document.querySelector('input[name=amount]'),
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  let delay = +form['delay'].value;
  const amount = +form['amount'].value;
  const step = +form['step'].value;
  let position = 0;
  for (let i = 0; i < amount; i++) {
    console.log('delay', delay);
    position += 1;
    const firstDelay = delay;
    let newDelay = (delay += step);
    createPromise(position, firstDelay, newDelay)
      .then(({ position, newDelay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${newDelay}ms`
          );
        }, newDelay);
      })
      .catch(({ position, newDelay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `❌ Rejected promise ${position} in ${newDelay}ms`
          );
        }, newDelay);
      });
  }
});

function createPromise(position, newDelay) {
  const shouldResolve = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      return resolve({ position, newDelay });
    } else {
      return reject({ position, newDelay });
    }
  });
}

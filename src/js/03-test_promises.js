// function createPromise(position, delay) {
//--  return new Promise(function (resolve, reject) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//-- resolve('good');
//   } else {
//     // Reject
//-- reject('bad');
//   }
    // }
  //--});

  //-- createPromise(1, 1000)
  //--.then(result => console.log(result))
  //--.catch(err => console.log(err))
  
  
// const fetchPockemon = (id, onSuccess, onErrror) => {
// fetch(`https://pokeapi.co./api/v2/pokemon/${id}`)
//   .then(r => r.json())
//   .then(pokemon => { onFetchSuccess(pokemon) })
//   .catch(error => { onFetchError(err) });
// }
import Notiflix from 'notiflix';

Notiflix.Notify.success('Sol lucet omnibus');

Notiflix.Notify.failure('Qui timide rogat docet negare');

Notiflix.Notify.warning('Memento te hominem esse');

Notiflix.Notify.info('Cogito ergo sum');

Notiflix.Confirm.show(
  'Notiflix Confirm',
  'Do you agree with me?',
  'Yes',
  'No',
  function okCb() {
    alert('Thank you.');
  },
  function cancelCb() {
    alert('If you say so...');
  },
  {
    width: '320px',
    borderRadius: '8px',
    // etc...
  },
);

const fetchPockemon = (id) => {
return fetch(`https://pokeapi.co./api/v2/pokemon/${id}`).then(r => r.json())
}

// fetchPockemon(2, onFetchSuccess, onFetchError);
fetchPockemon(2).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log("pokemon", pokemon);  
};

function onFetchError(err) { console.log(err); };


const horses = [
  'Rast', 'West', 'First', 'Last','Lucky'
]
console.log('Start RUN');

// run('Test').then(x => console.log(x));
const promises = horses.map(horse => run(horse));

Promise.race(promises).then(x => console.log('Fast horses ', x));
Promise.race(promises).then(({ horse, time }) => console.log(`Fast horses ${horse} it time ${time}`));

Promise.all(promises).then(x => x.map(({ horse, time }) => console.log(`Name horses ${horse} it time ${time}`)));

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
    })
  }

function getRandomTime(min, max) { 
  return Math.round(Math.random() * (max - min) + min);
}



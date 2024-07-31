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

// const fetchPockemon = (id, onSuccess, onErrror) => {
// fetch(`https://pokeapi.co./api/v2/pokemon/${id}`)
//   .then(r => r.json())
//   .then(pokemon => { onFetchSuccess(pokemon) })
//   .catch(error => { onFetchError(err) });
// }

const fetchPockemon = (id) => {
return fetch(`https://pokeapi.co./api/v2/pokemon/${id}`).then(r => r.json())
}

// fetchPockemon(2, onFetchSuccess, onFetchError);
fetchPockemon(2).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log("pokemon", pokemon);  
};

function onFetchError(err) { console.log(err); };
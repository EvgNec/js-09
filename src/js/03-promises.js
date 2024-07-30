// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

const fetchPockemon = id => {
fetch(`https://pokeapi.co./api/v2/pokemon/${id}`)
  .then(r => r.json())
  .then(res => console.log(res))
.catch(err => console.log(err));
}


fetchPockemon(2);
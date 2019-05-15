/*
  Shuffle function to shuffle pokemon deck
*/
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/*
  Sum exp from pokemon cards
  input: array of pokemon
  output: integer - total of exp of all cards
*/

function sumExp(arr) {
  return arr.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
}

export { shuffle, sumExp }

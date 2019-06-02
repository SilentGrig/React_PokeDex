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
  return arr.reduce((exp, pokemon) => {
    return exp + ( pokemon.isSelected ? pokemon.base_experience : 0 );
  }, 0);
}

/*
  Pads the start of a string or number with character specified
  to a certain specified length
*/

function padStart(originalString, padChar, newLength) {

  let newString = originalString.toString();
  
  while( newString.length < newLength ) {
    newString = padChar + newString;
  }

  return newString;
}

export { shuffle, sumExp, padStart }

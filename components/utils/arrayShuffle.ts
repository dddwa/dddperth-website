export default function arrayShuffle<T>(input: Array<T>) {

  const output = [...input];

  for (var i = input.length-1; i >=0; i--) {

      var randomIndex = Math.floor(Math.random()*(i+1));
      var itemAtIndex = output[randomIndex];

      output[randomIndex] = output[i];
      output[i] = itemAtIndex;
  }

  return output;
}

export default function arrayShuffle<T>(input: T[]): T[] {
  const output = [...input]

  for (let i = input.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const itemAtIndex = output[randomIndex]

    output[randomIndex] = output[i]
    output[i] = itemAtIndex
  }

  return output
}

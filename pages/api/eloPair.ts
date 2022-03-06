import data from 'public/static/agenda/2019.json'

const randomItem = <T, _>(arr: T[]): T => arr[(Math.random() * arr.length) | 0]

export default function handler(_, res) {
  const itemOne = randomItem(data)
  const itemTwo = randomItem(data)

  res.status(200).json([itemOne, itemTwo])
}

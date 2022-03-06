import { Session } from 'config/types'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const vote: Session = JSON.parse(req.body)
    console.log(`vote received`, vote.Id, vote.Title)
    res.status(200).send(`vote received`)
  }
}

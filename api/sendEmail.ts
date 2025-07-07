import type { VercelRequest, VercelResponse } from '@vercel/node'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, email } = req.body

  await sgMail.send({
    to: email,
    from: 'noreply@yourapp.com',
    subject: 'Welcome to our waitlist!',
    text: `Hi ${name}, thanks for joining our waitlist!`,
  })

  return res.status(200).json({ ok: true })
}

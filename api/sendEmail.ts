import type { VercelRequest, VercelResponse } from '@vercel/node'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, email } = req.body
  try {
    await sgMail.send({
      to: email,
      from: 'noreply@yourapp.com',  // тот же, что вы верифицировали в SendGrid
      subject: 'Welcome to our waitlist!',
      text: `Hi ${name}, thanks for joining!`,
    })
    console.log(`Email sent to ${email}`)
    return res.status(200).json({ ok: true })
  } catch (err: any) {
    console.error('SendGrid error:', err)
    return res.status(500).json({ error: err.message })
  }
}

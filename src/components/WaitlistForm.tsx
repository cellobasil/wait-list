// src/components/WaitlistForm.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface WaitlistFormProps {
  spotsLeft: number
  showSpotsLeft?: boolean
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({
  spotsLeft,
  showSpotsLeft = true,
}) => {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [status, setStatus] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending…')

    // 1) Сохраняем в Supabase
    const { data, error } = await supabase
      .from('whitelist')
      .insert(
        [{ name: formData.name, email: formData.email }],
        { returning: 'representation' }
      )

    if (error) {
      console.error(error)
      return setStatus(`Error: ${error.message}`)
    }

    // 2) Отправляем email через serverless-функцию
    await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: formData.name, email: formData.email }),
    })

    // 3) Перенаправляем на страницу благодарности
    navigate('/thank-you')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full">
          🚀 Join Now - It’s Free
        </Button>
      </form>
      {status && <p className="mt-2 text-center">{status}</p>}
      {showSpotsLeft && (
        <p className="text-center text-sm text-gray-600">
          Only <span className="font-bold">{spotsLeft}</span> spots left out of 50
        </p>
      )}
    </div>
  )
}

export default WaitlistForm

// src/components/WaitlistForm.tsx
import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface WaitlistFormProps {
  spotsLeft: number
  showSpotsLeft?: boolean
}

const WaitlistForm = ({ spotsLeft, showSpotsLeft = true }: WaitlistFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsappNumber: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Отправка…')
    const { data, error } = await supabase
      .from('whitelist')
      .insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.whatsappNumber
      }], { returning: 'representation' })

    if (error) {
      console.error(error)
      setStatus(`Ошибка: ${error.message}`)
    } else {
      setStatus('Спасибо! Мы получили вашу заявку.')
      setFormData({ name: '', email: '', whatsappNumber: '' })
    }
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
        <Input
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          value={formData.whatsappNumber}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full">
          🚀 Join Now - It's Free
        </Button>
      </form>
      {status && <p className="mt-2 text-center">{status}</p>}
      {showSpotsLeft && (
        <p className="text-center mt-4 text-sm text-gray-600">
          Only <span className="font-bold">{spotsLeft}</span> spots left out of 50
        </p>
      )}
    </div>
  )
}

export default WaitlistForm

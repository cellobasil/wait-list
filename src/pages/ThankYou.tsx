import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
    <h1 className="text-3xl font-bold mb-2">Thank you for signing up!</h1>
    <p className="mb-4">Check your email—we’ve just sent you a confirmation message.</p>
    <Link to="/" className="text-blue-600 hover:underline">
      ← Back to home
    </Link>
  </div>
)

export default ThankYou

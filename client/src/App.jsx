import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!inputValue.trim()) {
      alert('Please enter email or mobile number')
      setSuccessMessage('')
      return
    }

    setSuccessMessage('Reset link sent successfully')
    setInputValue('')
  }

  return (
    <div className="reset-page">
      <div className="reset-card">
        <div className="card-top">
          <span className="brand">TravelGo</span>
          <h1>Reset your password</h1>
          <p>We will send you a link to reset your password.</p>
        </div>

        <form className="reset-form" onSubmit={handleSubmit}>
          <label className="field-label">
            Email OR Mobile Number
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Enter your email or mobile number"
            />
          </label>
          <button type="submit" className="primary-button">
            Send Reset Link
          </button>
        </form>

        {successMessage && <div className="success-message">{successMessage}</div>}

        <div className="back-link">
          <a href="#">Back to Login</a>
        </div>
      </div>
    </div>
  )
}

export default App

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
import './App.css'

function App() {
  return (
    <main className="home-page">
      <header className="top-nav">
        <p className="logo">TeamFullStack</p>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="badge">New: Fast project onboarding</span>
          <h1>Build, track, and launch your team projects in one place.</h1>
          <p>
            TeamFullStack helps your team organize tasks, monitor progress, and ship faster
            with a simple and clean workflow.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-btn">
              Get started
            </button>
            <button type="button" className="secondary-btn">
              Learn more
            </button>
          </div>
        </div>
        <div className="hero-panel" aria-hidden="true">
          <h2>Live Progress</h2>
          <ul>
            <li>12 tasks completed today</li>
            <li>4 team members active</li>
            <li>2 milestones due this week</li>
          </ul>
        </div>
      </section>

      <section className="features" id="features">
        <article className="feature-card">
          <h3>Task Management</h3>
          <p>Create, assign, and update tasks with clear ownership.</p>
        </article>
        <article className="feature-card">
          <h3>Team Collaboration</h3>
          <p>Keep everyone aligned with shared updates and timelines.</p>
        </article>
        <article className="feature-card">
          <h3>Performance Insights</h3>
          <p>Track project health and delivery pace in real time.</p>
        </article>
      </section>

      <section className="cta" id="contact">
        <h2>Ready to improve your team workflow?</h2>
        <p>Start building better projects with a modern frontend experience.</p>
        <button type="button" className="primary-btn">
          Create your workspace
        </button>
      </section>
    </main>
  )
}

export default App
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, mobile, password, confirmPassword } = formData;
    if (!fullName || !email || !mobile || !password || !confirmPassword) {
      alert('Please fill all fields correctly');
      return;
    }
    if (password !== confirmPassword) {
      alert('Please fill all fields correctly');
      return;
    }
    alert('Signup Successful');
  };

  return (
    <div className="app">
      <div className="signup-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <div className="input-group">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <button type="submit" className="create-account-btn">Create Account</button>
        </form>
        <div className="extra-links">
          <p>Already have an account? <a href="#">Login</a></p>
          <p className="terms">By signing up, you agree to our Terms & Conditions</p>
        </div>
        <div className="social-signup">
          <button className="social-btn google">Sign up with Google</button>
          <button className="social-btn facebook">Sign up with Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default App;

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

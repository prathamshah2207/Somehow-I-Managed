import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-container">
      {/* NAVBAR */}
      <header className="landing-nav">
        <div className="landing-logo">
          Somehow I Managed
        </div>

        <nav className="landing-nav-actions">
          <Link to="/login" className="nav-link">
            Log in
          </Link>
          <Link to="/signup" className="nav-btn nav-btn-primary">
            Get started
          </Link>
        </nav>
      </header>

      {/* MAIN */}
      <main className="landing-main">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Turn scattered tasks into a plan you actually follow.
            </h1>
            <p className="hero-subtitle">
              Somehow I Managed keeps your events, deadlines, and routines in one focused workspace –
              so you stop reacting to chaos and start running your day on purpose.
            </p>

            <div className="hero-actions">
              <Link to="/signup" className="hero-cta hero-cta-primary">
                Start organizing
              </Link>
              <Link to="/login" className="hero-cta hero-cta-secondary">
                I already have an account
              </Link>
            </div>

            <p className="hero-footnote">
              No buzzwords. Just a clean timeline of what actually matters today.
            </p>
          </div>

          {/* HERO PREVIEW / VISUAL BLOCK */}
          <div className="hero-preview">
            <div className="preview-header">
              <span className="preview-title">Today&apos;s Focus</span>
              <span className="preview-date">Tue · 4 tasks</span>
            </div>

            <ul className="preview-list">
              <li className="preview-item">
                <span className="preview-tag preview-tag-priority">Priority</span>
                <div className="preview-text">
                  <p className="preview-task">Team stand-up</p>
                  <p className="preview-meta">9:30 AM · 30 min</p>
                </div>
              </li>
              <li className="preview-item">
                <span className="preview-tag">Deep work</span>
                <div className="preview-text">
                  <p className="preview-task">Finish proposal draft</p>
                  <p className="preview-meta">10:00 AM – 12:00 PM</p>
                </div>
              </li>
              <li className="preview-item">
                <span className="preview-tag">Life</span>
                <div className="preview-text">
                  <p className="preview-task">Groceries & errands</p>
                  <p className="preview-meta">After 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* FEATURE STRIP */}
        <section className="feature-section">
          <h2 className="feature-heading">
            Built for people who juggle more than one life.
          </h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3 className="feature-title">One timeline</h3>
              <p className="feature-desc">
                Work, study, personal stuff – all in one view instead of five different apps.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Events that make sense</h3>
              <p className="feature-desc">
                Attach context to your events so you know what “meeting at 3 PM” actually means.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Routines, not just reminders</h3>
              <p className="feature-desc">
                Turn repeating chaos into simple recurring blocks you don&apos;t have to rethink daily.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Designed to stay out of the way</h3>
              <p className="feature-desc">
                Clean UI, zero clutter – so your brain focuses on work, not the tool.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;

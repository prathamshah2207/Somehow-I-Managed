import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const formattedDate = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const formattedTime = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="lp-root">
      {/* NAVBAR */}
      <header className="lp-nav">
        <div className="lp-nav-left">
          <div className="lp-logo">Somehow I Managed</div>
        </div>

        <nav className="lp-nav-center">
          <a href="#hero" className="lp-nav-link">
            Dashboard
          </a>
          <a href="#features" className="lp-nav-link">
            Features
          </a>
          <a href="#how-it-works" className="lp-nav-link">
            How it works
          </a>
          <a href="#why" className="lp-nav-link">
            About
          </a>
          <a href="#faq" className="lp-nav-link">
            FAQ / Docs
          </a>
        </nav>

        <div className="lp-nav-right">
          <Link to="/login" className="lp-nav-auth lp-nav-auth-secondary">
            Log in
          </Link>
          <Link to="/signup" className="lp-nav-auth lp-nav-auth-primary">
            Get started
          </Link>
        </div>
      </header>

      <main className="lp-main">
        {/* HERO */}
        <section id="hero" className="lp-hero">
          <div className="lp-hero-left lp-animate lp-animate-rise">
            <div className="lp-hero-status-pill">
              <span className="lp-status-dot" />
              <span className="lp-status-text">
                Today · {formattedDate} · {formattedTime}
              </span>
            </div>

            <h1 className="lp-hero-title">
              A calm command center for your messy real life.
            </h1>

            <p className="lp-hero-subtitle">
              Somehow I Managed keeps your tasks, events, and routines in one
              clear timeline, so juggling work, uni, and life stops feeling like
              tab-switching speedruns.
            </p>

            <div className="lp-hero-actions">
              <Link to="/signup" className="lp-hero-cta lp-hero-cta-primary">
                Start organizing in 30 seconds
              </Link>
              <Link to="/login" className="lp-hero-cta lp-hero-cta-secondary">
                I already have an account
              </Link>
            </div>

            <p className="lp-hero-footnote">
              No “productivity porn” dashboards. Just a simple, honest view of
              what actually matters today.
            </p>
          </div>

          {/* PRODUCT PREVIEW / GLASS PANEL */}
          <div className="lp-hero-right lp-animate lp-animate-float">
            <div className="lp-glass-panel lp-panel-main">
              <div className="lp-panel-header">
                <span className="lp-panel-title">Today&apos;s timeline</span>
                <span className="lp-panel-meta">4 blocks · 1 focus window</span>
              </div>

              <ul className="lp-timeline-list">
                <li className="lp-timeline-item">
                  <div className="lp-timeline-time">09:30</div>
                  <div className="lp-timeline-content">
                    <div className="lp-timeline-label lp-pill-priority">
                      Priority
                    </div>
                    <div className="lp-timeline-text">
                      <p className="lp-timeline-title">Team stand-up</p>
                      <p className="lp-timeline-sub">30 min · sync, not a rant</p>
                    </div>
                  </div>
                </li>

                <li className="lp-timeline-item">
                  <div className="lp-timeline-time">10:00</div>
                  <div className="lp-timeline-content">
                    <div className="lp-timeline-label lp-pill-deep">
                      Deep work
                    </div>
                    <div className="lp-timeline-text">
                      <p className="lp-timeline-title">Proposal draft</p>
                      <p className="lp-timeline-sub">
                        2 hr focus block · phone on silent
                      </p>
                    </div>
                  </div>
                </li>

                <li className="lp-timeline-item">
                  <div className="lp-timeline-time">14:30</div>
                  <div className="lp-timeline-content">
                    <div className="lp-timeline-label lp-pill-normal">
                      Event
                    </div>
                    <div className="lp-timeline-text">
                      <p className="lp-timeline-title">Client call</p>
                      <p className="lp-timeline-sub">Zoom · link attached</p>
                    </div>
                  </div>
                </li>

                <li className="lp-timeline-item">
                  <div className="lp-timeline-time">After 18:00</div>
                  <div className="lp-timeline-content">
                    <div className="lp-timeline-label lp-pill-life">
                      Life
                    </div>
                    <div className="lp-timeline-text">
                      <p className="lp-timeline-title">Groceries & reset</p>
                      <p className="lp-timeline-sub">
                        No tasks after this. Day officially done.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lp-glass-panel lp-panel-secondary">
              <p className="lp-panel-secondary-title">Roles you juggle</p>
              <div className="lp-roles-row">
                <span className="lp-role-pill">Work</span>
                <span className="lp-role-pill">Student</span>
                <span className="lp-role-pill">Freelance</span>
                <span className="lp-role-pill">Life admin</span>
              </div>
              <p className="lp-panel-secondary-sub">
                One timeline, all your identities. No more separate calendars.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="lp-section lp-section-features">
          <div className="lp-section-header">
            <h2 className="lp-section-title">Built for people who live in tabs.</h2>
            <p className="lp-section-subtitle">
              Somehow I Managed isn&apos;t pretending you&apos;re only a &quot;student&quot;
              or only an &quot;employee&quot;. It&apos;s built for people who are doing
              all of it at once.
            </p>
          </div>

          <div className="lp-feature-grid">
            <div className="lp-feature-card lp-animate lp-animate-rise">
              <h3 className="lp-feature-title">One timeline</h3>
              <p className="lp-feature-body">
                See work, uni, and personal tasks in a single view instead of
                three half-updated calendars.
              </p>
            </div>

            <div className="lp-feature-card lp-animate lp-animate-rise lp-delay-1">
              <h3 className="lp-feature-title">Events with context</h3>
              <p className="lp-feature-body">
                Attach notes, links, and tags so &quot;meeting at 3&quot; actually
                means something when you see it later.
              </p>
            </div>

            <div className="lp-feature-card lp-animate lp-animate-rise lp-delay-2">
              <h3 className="lp-feature-title">Routines, not chaos</h3>
              <p className="lp-feature-body">
                Turn recurring mess into simple blocks – morning focus, gym, admin
                hour – and reuse them.
              </p>
            </div>

            <div className="lp-feature-card lp-animate lp-animate-rise lp-delay-3">
              <h3 className="lp-feature-title">Stays out of the way</h3>
              <p className="lp-feature-body">
                Glassy, minimal UI with no gamification spam. Just enough design
                to keep you calm.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="lp-section lp-section-how">
          <div className="lp-section-header">
            <h2 className="lp-section-title">How it actually works.</h2>
            <p className="lp-section-subtitle">
              No 40-step onboarding. You&apos;re three moves away from a timeline
              that makes sense.
            </p>
          </div>

          <div className="lp-how-grid">
            <div className="lp-how-card">
              <div className="lp-step-badge">Step 1</div>
              <h3 className="lp-how-title">Create your space</h3>
              <p className="lp-how-body">
                Sign up, add your name, pick the roles you actually play in life.
                That&apos;s it. No forced team setup or company fields.
              </p>
            </div>

            <div className="lp-how-card">
              <div className="lp-step-badge">Step 2</div>
              <h3 className="lp-how-title">Drop in your events</h3>
              <p className="lp-how-body">
                Add shifts, classes, calls, exams, deep work blocks – anything
                that lives in your head or random notes app.
              </p>
            </div>

            <div className="lp-how-card">
              <div className="lp-step-badge">Step 3</div>
              <h3 className="lp-how-title">See the real day</h3>
              <p className="lp-how-body">
                Get one clean timeline, with clear boundaries for work and
                shutdown. No &quot;maybe I can squeeze one more thing in&quot; lies.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why" className="lp-section lp-section-why">
          <div className="lp-section-header">
            <h2 className="lp-section-title">Why not just use a normal calendar?</h2>
            <p className="lp-section-subtitle">
              Because you&apos;re not managing just &quot;events&quot; – you&apos;re managing energy,
              context, and the 3 different lives you&apos;re living at once.
            </p>
          </div>

          <div className="lp-why-grid">
            <div className="lp-why-card">
              <h3 className="lp-why-title">Timeline-first design</h3>
              <p className="lp-why-body">
                Instead of tiny squares in a month grid, you get a narrative of
                your day: what comes first, what comes after, and when you&apos;re done.
              </p>
            </div>
            <div className="lp-why-card">
              <h3 className="lp-why-title">Built for real life context</h3>
              <p className="lp-why-body">
                Attach zoom links, notes, and tags per block. You don&apos;t have to
                dig through DMs or emails to remember &quot;what is this about?&quot;
              </p>
            </div>
            <div className="lp-why-card">
              <h3 className="lp-why-title">Doesn&apos;t pretend you&apos;re a robot</h3>
              <p className="lp-why-body">
                The goal is not to pack every free second. It&apos;s to make sure your
                day is realistic – with space to breathe.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ / DOCS STYLE SECTION */}
        <section id="faq" className="lp-section lp-section-faq">
          <div className="lp-section-header">
            <h2 className="lp-section-title">FAQ — a.k.a. &quot;Do I really need this?&quot;</h2>
            <p className="lp-section-subtitle">
              Short answers so you don&apos;t have to scroll through a fake 20-question
              FAQ nobody reads.
            </p>
          </div>

          <div className="lp-faq-grid">
            <div className="lp-faq-item">
              <h3 className="lp-faq-question">Is this only for students?</h3>
              <p className="lp-faq-answer">
                Nope. It works whether you&apos;re juggling classes, a job, freelancing,
                or all three. You define the roles; the app just gives you one
                sanity-preserving timeline.
              </p>
            </div>

            <div className="lp-faq-item">
              <h3 className="lp-faq-question">
                Will I have to re-enter everything every time?
              </h3>
              <p className="lp-faq-answer">
                Your account and events live in a proper database (PostgreSQL on
                Neon), not your local browser. Log in from anywhere and your
                timeline follows you.
              </p>
            </div>

            <div className="lp-faq-item">
              <h3 className="lp-faq-question">
                What happens if I close the tab or refresh?
              </h3>
              <p className="lp-faq-answer">
                The plan is to keep you signed in with tokens, so your context is
                there even when you come back after a long day. No daily
                re-login ritual.
              </p>
            </div>

            <div className="lp-faq-item">
              <h3 className="lp-faq-question">
                How much does &quot;Somehow I Managed&quot; cost?
              </h3>
              <p className="lp-faq-answer">
                For now: it&apos;s free while we&apos;re building it out and testing with
                real people. Later, there might be a paid tier for power users,
                but the core timeline will always stay simple.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="lp-footer">
        <div className="lp-footer-left">
          <span className="lp-footer-logo">Somehow I Managed</span>
          <span className="lp-footer-meta">Made by people who hate chaotic days.</span>
        </div>
        <div className="lp-footer-links">
          <a href="#hero">Back to top</a>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Get started</Link>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

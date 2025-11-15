import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import SIMLogo from ".../images/SIM_horizontal_logo.png";

function LandingPage() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000); // update every second
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
          <a href="https://www.somehowimanaged.website" className="lp-logo" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.somehowimanaged.website";
            }}
            aria-label="Somehow I Managed — Home"
          >
            <img
              src={SIMLogo}
              alt="Somehow I Managed"
              className="lp-logo-img"
              draggable="false"
            />
          </a>
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
          <Link to="/login" className="lp-nav-auth lp-nav-auth-secondary">Log in</Link>
          <Link to="/signup" className="lp-nav-auth lp-nav-auth-primary">Get started</Link>
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
              No fake productivity dashboards. Just a simple, honest view of
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
                      <p className="lp-timeline-sub">30 min · quick sync</p>
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
                        2 hr focus block · no notifications
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
                      <p className="lp-timeline-sub">Online · link attached</p>
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
                One timeline for all your identities. No more switching between
                five different apps.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="lp-section lp-section-features">
          <div className="lp-section-header">
            <h2 className="lp-section-title">Built for people who live in tabs.</h2>
            <p className="lp-section-subtitle">
              Somehow I Managed doesn&apos;t assume you&apos;re just a &quot;student&quot; or just
              an &quot;employee&quot;. It&apos;s made for people balancing work, study, side
              projects, and a life.
            </p>
          </div>

          <div className="lp-feature-grid">
            <div className="lp-feature-card lp-animate lp-animate-rise">
              <h3 className="lp-feature-title">One timeline</h3>
              <p className="lp-feature-body">
                See everything in one place instead of jumping between random
                calendars, notes, and group chats.
              </p>
            </div>

            <div className="lp-feature-card lp-animate lp-animate-rise lp-delay-1">
              <h3 className="lp-feature-title">Events with context</h3>
              <p className="lp-feature-body">
                Add notes, links, and tags so you know exactly what “meeting at
                3 PM” actually means.
              </p>
            </div>

            <div className="lp-feature-card lp-animate lp-animate-rise lp-delay-2">
              <h3 className="lp-feature-title">Routines, not chaos</h3>
              <p className="lp-feature-body">
                Turn your recurring mess into simple blocks – morning focus,
                gym, admin hour – and reuse them.
              </p>
            </div>

            <div className="lp-feature-card lp-animate lp-animate-rise lp-delay-3">
              <h3 className="lp-feature-title">Stays out of the way</h3>
              <p className="lp-feature-body">
                Clean, glassy UI with no clutter or badges screaming at you.
                Just enough design to keep your brain calm.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="lp-section lp-section-how">
          <div className="lp-section-header">
            <h2 className="lp-section-title">How it actually works.</h2>
            <p className="lp-section-subtitle">
              No 40-step onboarding. You&apos;re three moves away from a day that
              looks like it was planned on purpose.
            </p>
          </div>

          <div className="lp-how-grid">
            <div className="lp-how-card">
              <div className="lp-step-badge">Step 1</div>
              <h3 className="lp-how-title">Create your space</h3>
              <p className="lp-how-body">
                Sign up, add your name, pick the roles you actually play in
                life. No company forms, no random fields.
              </p>
            </div>

            <div className="lp-how-card">
              <div className="lp-step-badge">Step 2</div>
              <h3 className="lp-how-title">Drop in your events</h3>
              <p className="lp-how-body">
                Add shifts, classes, calls, exams, and deep work blocks – all
                the stuff that usually lives in your head.
              </p>
            </div>

            <div className="lp-how-card">
              <div className="lp-step-badge">Step 3</div>
              <h3 className="lp-how-title">See the real day</h3>
              <p className="lp-how-body">
                Get one clear timeline with obvious start, middle, and end.
                When the last block is done, you&apos;re actually done.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why" className="lp-section lp-section-why">
          <div className="lp-section-header">
            <h2 className="lp-section-title">
              Why not just use a normal calendar?
            </h2>
            <p className="lp-section-subtitle">
              Because your life isn&apos;t just “events”. It&apos;s context, energy, and
              three different roles fighting for the same 24 hours.
            </p>
          </div>

          <div className="lp-why-grid">
            <div className="lp-why-card">
              <h3 className="lp-why-title">Timeline-first design</h3>
              <p className="lp-why-body">
                Instead of tiny squares in a month grid, you see a story of your
                day: what comes first, what comes after, and when you stop.
              </p>
            </div>
            <div className="lp-why-card">
              <h3 className="lp-why-title">Made for context</h3>
              <p className="lp-why-body">
                Keep the useful stuff attached to each block – notes, links,
                tags – so you&apos;re not hunting through chats and email.
              </p>
            </div>
            <div className="lp-why-card">
              <h3 className="lp-why-title">Respects your energy</h3>
              <p className="lp-why-body">
                The goal isn&apos;t to pack every empty minute. It&apos;s to build a
                day that&apos;s actually sustainable.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ / DOCS STYLE SECTION */}
        <section id="faq" className="lp-section lp-section-faq">
          <div className="lp-section-header">
            <h2 className="lp-section-title">
              FAQ — a.k.a. “Do I really need this?”
            </h2>
            <p className="lp-section-subtitle">
              Quick answers so you don&apos;t have to scroll through a fake 20-question
              FAQ nobody reads.
            </p>
          </div>

          <div className="lp-faq-grid">
            <div className="lp-faq-item">
              <h3 className="lp-faq-question">Is this only for students?</h3>
              <p className="lp-faq-answer">
                No. It works whether you&apos;re studying, working, freelancing, or
                doing all of it at the same time.
              </p>
            </div>

            <div className="lp-faq-item">
              <h3 className="lp-faq-question">
                Will my stuff still be there when I come back?
              </h3>
              <p className="lp-faq-answer">
                Yes. Once you create an account, your events and routines stay
                tied to you, so your timeline follows you across devices.
              </p>
            </div>

            <div className="lp-faq-item">
              <h3 className="lp-faq-question">
                Do I have to log in every single time?
              </h3>
              <p className="lp-faq-answer">
                The plan is to keep you signed in with secure tokens, so you can
                pick up where you left off without a daily login ritual.
              </p>
            </div>

            <div className="lp-faq-item">
              <h3 className="lp-faq-question">How much does it cost?</h3>
              <p className="lp-faq-answer">
                Right now, it&apos;s free while it&apos;s being built and tested. Later,
                there might be a paid tier, but the core timeline experience will
                stay simple and accessible.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="lp-footer">
        <div className="lp-footer-left">
          <span className="lp-footer-logo">Somehow I Managed</span>
          <span className="lp-footer-meta">
            Made for people who don&apos;t have a “single focus”.
          </span>
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

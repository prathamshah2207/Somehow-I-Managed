import "../index.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>

      {/* NAV */}
      <div style={{
        width: "100%",
        padding: "25px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(10px)"
      }}>
        <div className="logo" style={{ fontSize: "24px", fontWeight: "700" }}>
          Somehow I Managed
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/login" style={{ fontSize: "18px" }}>Login</Link>
          <Link to="/signup"
            style={{
              fontSize: "18px",
              padding: "8px 18px",
              background: "#111",
              color: "#fff",
              borderRadius: "12px"
            }}>
            Sign Up
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div className="hero">
        <h1 className="hero-title">
          You miss 100% of the chances you don’t take.
        </h1>
        <p className="hero-sub">
          Manage your student life effortlessly — assignments, shifts, finals, all in one place.
        </p>

        {/* FLOATING CARDS */}
        <div className="features">

          <div className="feature-card">
            <div className="feature-title">Assignments</div>
            <div className="feature-desc">Track deadlines and never miss a task again.</div>
          </div>

          <div className="feature-card">
            <div className="feature-title">Midterms & Finals</div>
            <div className="feature-desc">Organize your exam schedule with clarity.</div>
          </div>

          <div className="feature-card">
            <div className="feature-title">Shifts</div>
            <div className="feature-desc">Manage work shifts smoothly with reminders.</div>
          </div>

          <div className="feature-card">
            <div className="feature-title">Free Time</div>
            <div className="feature-desc">Balance studies and life with smart scheduling.</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default LandingPage;

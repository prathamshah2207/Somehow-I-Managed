import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Profile.css";
import { API_BASE_URL } from "../configs";

function Profile({ user, onUserUpdate }) {
  const navigate = useNavigate();

  const [age, setAge] = useState(user?.age ?? "");
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  // If user prop changes (e.g. after /me), sync age
  useEffect(() => {
    if (!user) return;
    setAge(user.age ?? "");
  }, [user]);

  // Guard: if no user, go to login
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    // brief fallback while redirect happens
    return (
      <div className="profile-container">
        <div className="profile-card">
          <p>Redirecting to login…</p>
        </div>
      </div>
    );
  }

  const displayName = user.display_name || user.username;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setSaving(true);

    let ageToSend = null;

    if (age !== "" && age !== null) {
      const parsed = Number(age);
      if (Number.isNaN(parsed) || parsed < 0) {
        setSaving(false);
        setStatus("Please enter a valid non-negative age.");
        return;
      }
      ageToSend = parsed;
    }

    try {
      const res = await axios.put(
        `${API_BASE_URL}/core/profile/`,
        { age: ageToSend },
        { withCredentials: true }
      );

      // Expect backend to return updated user data
      const updatedUser = res.data.user || {
        ...user,
        age: ageToSend,
      };

      if (onUserUpdate) {
        onUserUpdate(updatedUser);
      }

      setStatus("Changes saved.");
    } catch (err) {
      console.error("Error saving profile:", err);
      setStatus("Could not save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h2>Profile</h2>
          <p className="profile-subtitle">
            Manage the basics of your Somehow I Managed account.
          </p>
        </div>

        <form className="profile-form" onSubmit={handleSubmit}>
          {/* Display name (read-only) */}
          <div className="profile-field">
            <label>Display name</label>
            <p className="profile-field-value">{displayName}</p>
          </div>

          {/* Username (read-only) */}
          <div className="profile-field">
            <label>Username</label>
            <p className="profile-field-value">{user.username}</p>
          </div>

          {/* Email (read-only) */}
          <div className="profile-field">
            <label>Email</label>
            <p className="profile-field-value">{user.email}</p>
          </div>

          {/* Age (editable) */}
          <div className="profile-field">
            <label htmlFor="age-input">Age</label>
            <input
              id="age-input"
              type="number"
              min="0"
              className="profile-input"
              value={age === null ? "" : age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Add your age (optional)"
            />
            <p className="profile-help-text">
              You can change this anytime. It&apos;s only used inside your account.
            </p>
          </div>

          {/* Status message */}
          {status && <p className="profile-status">{status}</p>}

          <div className="profile-actions">
            <Link to="/" className="profile-secondary-button">
              Back to home
            </Link>
            <button
              type="submit"
              className="profile-primary-button"
              disabled={saving}
            >
              {saving ? "Saving…" : "Save changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;

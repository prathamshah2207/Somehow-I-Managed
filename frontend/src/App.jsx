import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { API_BASE_URL } from "./configs";
import axios from "axios";
import { getCsrfToken } from "./csrf";

// always send cookies
axios.defaults.withCredentials = true;

// automatically attach X-CSRFToken to unsafe methods
axios.interceptors.request.use((config) => {
  const method = (config.method || "get").toUpperCase();
  const isSafe = ["GET", "HEAD", "OPTIONS", "TRACE"].includes(method);

  if (!isSafe) {
    const token = getCsrfToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers["X-CSRFToken"] = token;
    }
  }

  return config;
});



function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);   // 👈 NEW

  // fetch current user once on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        // 1) Get csrftoken cookie
        await axios.get(`${API_BASE_URL}/core/csrf/`, {
          withCredentials: true,
        });
      } catch (err) {
        console.log("CSRF init failed", err);
      }

      try {
        const res = await axios.get(`${API_BASE_URL}/core/profile/`, {
          withCredentials: true,
        });
        if (res.data.isAuthenticated) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log("profile() failed (probably not logged in yet)", err);
        setUser(null);
      } finally {
        // 👇 important: auth check is done either way
        setAuthLoading(false);
      }
    };

    initAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${API_BASE_URL}/core/logout/`,
        {},
        { withCredentials: true }
      );
    } catch (err) {
      console.log("logout error", err);
    } finally {
      setUser(null);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              user={user}
              authLoading={authLoading}    // 👈 pass it in
              onLogout={handleLogout}
            />
          }
        />
        <Route path="/signup" element={<Signup user={user} />} />
        <Route
          path="/login"
          element={
            <Login
              user={user}
              onLoginSuccess={(u) => setUser(u)}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              onUserUpdate={(updated) => setUser(updated)}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

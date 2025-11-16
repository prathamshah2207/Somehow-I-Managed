// frontend/src/apiClient.js
import { API_BASE_URL } from "./configs";

// Grab a cookie value (for CSRF later)
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Generic request helper
export async function apiRequest(path, options = {}) {
  const {
    method = "GET",
    data = null,
    requireCsrf = false,
  } = options;

  const url = `${API_BASE_URL}${path}`;

  const headers = {
    Accept: "application/json",
  };

  if (data) {
    headers["Content-Type"] = "application/json";
  }

  if (requireCsrf) {
    const csrftoken = getCookie("csrftoken");
    if (csrftoken) {
      headers["X-CSRFToken"] = csrftoken;
    }
  }

  const response = await fetch(url, {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
    credentials: "include", // send/receive cookies (sessions)
  });

  let body = null;
  try {
    body = await response.json();
  } catch (e) {
    // ignore if no JSON
  }

  if (!response.ok) {
    const error = new Error(body?.error || "Request failed");
    error.status = response.status;
    error.data = body;
    throw error;
  }

  return body;
}

// Convenience wrappers (we'll use these later)

export function fetchProfile() {
  return apiRequest("/profile/");
}

export function loginRequest(emailOrUsername, password) {
  return apiRequest("/login/", {
    method: "POST",
    data: { email_name: emailOrUsername, password },
    requireCsrf: true,
  });
}

export function logoutRequest() {
  return apiRequest("/logout/", {
    method: "POST",
    requireCsrf: true,
  });
}

export function signupRequest({ username, email, password, display_name }) {
  return apiRequest("/signup/", {
    method: "POST",
    data: { username, email, password, display_name },
    requireCsrf: true,
  });
}

export function fetchCsrfToken() {
  return apiRequest("/csrf/");
}

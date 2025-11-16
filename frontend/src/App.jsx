function App() {
  const [user, setUser] = useState(null);           // holds user info when logged in
  const [authChecked, setAuthChecked] = useState(false); // to avoid flicker on first load

  // runs once when the app mounts
  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await fetchProfile(); // calls /core/profile/
        if (data.isAuthenticated) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setUser(null);
      } finally {
        setAuthChecked(true);
      }
    }

    loadProfile();
  }, []);

  // called by Login page when login succeeds
  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  // called when user clicks "Logout" (we'll wire the button later)
  const handleLogout = async () => {
    try {
      await logoutRequest(); // backend clears the session
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setUser(null);
    }
  };

  // optional: while we don't know yet if user is logged in, show nothing or a loader
  if (!authChecked) {
    return null; // or a spinner / skeleton if you want
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              user={user}
              onLogout={handleLogout}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <Login
              user={user}
              onLoginSuccess={handleLoginSuccess}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

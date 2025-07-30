// ProtectedPage.jsx
import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const handleLogin = () => {
    if (password === import.meta.env.VITE_OWNER_PASS) {
      setAccessGranted(true);
    } else {
      alert("Incorrect password!");
    }
  };

  if (accessGranted) {
    window.location.href = '/home';
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Owner Login</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleLogin}>Enter</button>
    </div>
  );
}

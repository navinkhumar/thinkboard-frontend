import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "Midun@2003") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      setError("❌ Incorrect password. Try again!");
    }
  };

  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(/images/bgImage.png)` }}
    >
      <div className="w-full max-w-md rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-lg border border-white/20">
        
        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Owner Login 🔐
        </h2>

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          placeholder="Enter your password"
          className="w-full rounded-xl border border-white bg-black/30 px-4 py-3 text-white placeholder-white-400 
focus:border-white focus:ring-2 focus:ring-white focus:outline-none"
        />

        {error && (
          <p className="mt-3 text-center text-sm text-red-400">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="mt-6 w-full rounded-xl bg-green-500 px-4 py-3 font-semibold text-black shadow-lg transition-all hover:bg-green-400 hover:scale-105 active:scale-95"
        >
          Enter
        </button>
      </div>
    </div>
  );
}

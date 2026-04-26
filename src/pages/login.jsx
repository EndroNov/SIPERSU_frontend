import { useState } from "react";
import "./login.css";

export default function Login({onLogin}) {
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8b1a1a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>

        <h1 className="login-title">SIPERSU TIK PNUP</h1>

        <form onSubmit={handleSubmit} className="login-form">
          {/* NIP Input */}
          <div className="input-group">
            <span className="input-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="NIP"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <span className="input-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login <span>→</span>
          </button>
        </form>
      </div>

      <footer className="login-footer">© 2026 SIPERSU JTIK-PNUP</footer>
    </div>
  );
}
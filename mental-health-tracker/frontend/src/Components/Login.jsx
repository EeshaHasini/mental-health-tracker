
import React, { useState } from "react";
 import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../Styles/Login.css";


export default function Login() {

  const [isSignup, setIsSignup] = useState(true); // toggle between Sign Up and Log In
  const [showPassword, setShowPassword] = useState(false); // toggle password visibility
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
    // reset fields when switching
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email : " + email);
    console.log("Password: " + password);
    console.log("Username : " + username);

    if (!email || !password || (isSignup && !username)) {
      alert("Please fill all the fields.");
    } else {
      alert(`${isSignup ? "Sign up successful" : "Login successful"} ${username}`);
      navigate('/home', { state: { username } }); // this redirects to the Home page
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        {/* leftt */}
        <div className="login-form">
          <p className="subtitle">Welcome to EkaMind ✨</p>
          <b>
            <p className="subtext">Track. Heal. Unite </p>
          </b>
          <p className="subtext2">
            A gamified experience to help you grow, one mindful level at a time.
          </p>

          <form onSubmit={handleLogin}>
            {isSignup && (
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            )}

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-pw"
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* {showPassword ? " " : ""} */}
              </button>

            </div>

            <b>
              <button className="btn-signin" type="submit">
                {isSignup ? "SIGN UP" : "LOGIN"}
              </button>
            </b>
          </form>

          {/* Toggle message */}
          <p className="toggle-link">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <span className="highlight" onClick={toggleForm}>
                  <b>
                    LOGIN
                  </b>
                </span>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <span className="highlight" onClick={toggleForm}>
                  <b>

                    SIGN UP

                  </b>
                </span>
              </>
            )}
          </p>
        </div>

        {/*right is avatar */}
        <div className="loginavatar">
<img src="C:\Users\akshi\my-app\public\assets\panda.png" alt="Koalaaa" />
        </div>
      </div>
    </div>
  );
}



// function Login() {
//   return (
//     <div>
//       <h2>Login Page</h2>
//       <Link to="/home">Go to Home</Link>
//     </div>
//   );
// }

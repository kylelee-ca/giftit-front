import { useState } from "react";
import randomImage from "../random-img.jpg";
import "../styles/form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert("submit request");
  };

  return (
    <div className="form-container container">
      <form onSubmit={handleSubmit}>
        <h1 className="form-heading">Sign In</h1>
        <div className="form-item">
          <p>
            <label for="email">Email</label>
          </p>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-item">
          <p>
            <label htmlFor="password">Password</label>
          </p>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-item">
          <p>
            <a href="#" className="form-link">
              Forgot Password?
            </a>
          </p>
          <button type="submit" className="form-btn">
            Login
          </button>
        </div>
      </form>
      <div className="form-image">
        <img src={randomImage} alt="toronto-img"></img>
      </div>
    </div>
  );
};
export default Login;

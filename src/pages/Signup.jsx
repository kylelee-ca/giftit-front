import { useState } from "react";
import randomImage from "../random-img.jpg";
import "../styles/form.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = () => {
    alert("submit request");
  };

  return (
    <div className="form-container container">
      <form onSubmit={handleSubmit}>
        <h1 className="form-heading">Sign Up</h1>
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
        <div className="form-items">
          <div className="form-item">
            <p>
              <label for="firstName">First Name</label>
            </p>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-item">
            <p>
              <label for="lastName">Last Name</label>
            </p>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
            <label htmlFor="password2">Confirm Password</label>
          </p>
          <input
            type="password"
            name="password2"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <div className="form-item">
          <p className="form-link">
            <a href="#">Already have an account?</a>
          </p>
          <button type="submit" className="form-btn">
            Sign Up
          </button>
        </div>
      </form>
      <div className="form-image">
        <img src={randomImage} alt="toronto-img"></img>
      </div>
    </div>
  );
};
export default Signup;

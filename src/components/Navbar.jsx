import { Link } from "react-router-dom";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import "../styles/navbar.css";
const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <div className="nav-container">
      <div>
        <button
          className="nav-hamburger"
          onClick={() => setNavExpanded(!navExpanded)}
        >
          <Hamburger />
        </button>
      </div>
      <div className="brand-logo">
        <Link to="/">Giftit</Link>
      </div>

      <div className={navExpanded ? "nav-menu expanded" : "nav-menu"}>
        <Link to="/registry">Registry</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-user-menu">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};
export default Navbar;

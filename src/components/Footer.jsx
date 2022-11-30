import "../styles/footer.css";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="col">
          <div className="col-heading">REGISTRY</div>
          <ul>
            <li>
              <a href="#">Find Registry</a>
            </li>
            <li>
              <a href="#">Create Registry</a>
            </li>
            <li>
              <a href="#">Create Registry</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <div className="col-heading">ABOUT US</div>
          <ul>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Notice</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="col-heading">GUIDES </div>
          <ul>
            <li>
              <a href="#">Baby Shower</a>
            </li>
            <li>
              <a href="#">Birthday</a>
            </li>
            <li>
              <a href="#">Wedding</a>
            </li>
            <li>
              <a href="#">Graduation</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="col-heading"> SUPPORT </div>
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>{" "}
            <li>
              <a href="#">Return & Exchange</a>
            </li>
          </ul>
        </div>

        <div className="col-2">
          <div className="row">
            <div className="col-heading">CONNECT WITH US</div>
            <ul>
              <li>
                <a href="http://google.com">
                  <FaTwitterSquare className="social-icons" />
                </a>
              </li>
              <li>
                <FaInstagram className="social-icons" />
              </li>
              <li>
                <FaFacebookSquare className="social-icons" />
              </li>
              <li>
                <FaYoutubeSquare className="social-icons" />
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="copyright">&copy; 2022 Giftit, Inc</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

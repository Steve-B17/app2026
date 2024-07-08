import './Footer.css';
import insta from './assets/instagram.png';
import facebook from './assets/facebook.png';
import phone from './assets/phone.png';
import message from './assets/mail.png';
import X from './assets/twitter.png';
import copyright from './assets/copyright.png';
function Footer() {
  return (
<footer>
      <div className="left-section">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/faq">FAQ</a>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="right-section">
        <h2 className="get-in-touch">Get in Touch</h2>
        <div className="social-icons">
           <a href="https://instagram.com"><img src={insta} alt="Instagram" className="insta"/></a>
           <a href="https://facebook.com"><img src={facebook} alt="Facebook" className="facebook" /></a>
           <a href="#"><img src={phone} alt="phone" className="phone" /></a>
           <a href=""><img src={message} alt="message" className="email" /></a>
           <a href="#"><img src={X} alt="X" className="img twitter" /></a>
        </div>

      </div>
      <hr className="separator" />
      <div className='copyright'>
        <img src={copyright} alt="copyright" className="copyright-img" />
        <p className="last-line">2024 Weather Inc.</p>
      </div>
    </footer>
  );
}
export default Footer;

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <ul>
          <li>Updates &amp; News</li>
          <li>Developer changelog</li>
          <li>Partner blog</li>
          <li>Engineering blog</li>
          <li>UX blog</li>
        </ul>

        <ul>
          <li>Comunity</li>
          <li>Developer forum</li>
          <li>Discord</li>
          <li>Twitter</li>
          <li>Youtube</li>
        </ul>

        <ul>
          <li>Events</li>
          <li>Unite</li>
          <li>Meetups</li>
        </ul>

        <ul>
          <li>Legal</li>
          <li>Terms of Service</li>
          <li>API Terms of Service</li>
          <li>Privacy policy</li>
        </ul>

        <ul>
          <li>Subscribe to receive updates from Shopify</li>
          <li>
            <input type="text" placeholder="Enter email" className="email-input"/>
            <button className="subscribe-btn">Subscribe</button>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <ul>
          <li>About Shopify</li>
          <li>Shopify Plus</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Press and Media</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

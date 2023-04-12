import "./Navbar.css";
import {FaShopify} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
          <ul className="nav-left-list">
              <li><FaShopify className="logo-icon"/>.dev</li>
              <li>Solutions &rarr; </li>
              <li>Blog</li>
              <li>Documentation</li>
          </ul>
      </div>
      <div className="nav-right"></div>
    </div>
  );
};

export default Navbar;

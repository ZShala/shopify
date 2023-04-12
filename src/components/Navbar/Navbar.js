import "./Navbar.css";
import { FaShopify } from "react-icons/fa";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <ul className="nav-left-list">
          <li className="logo">
            <FaShopify className="logo-icon" />
            .dev
          </li>
          <li>
            Solutions <span> &#9660; </span>
          </li>
          <li>Blog</li>
          <li>
            Documentation <span> &#9660; </span>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul className="nav-right-list">
          <li>
            <BiSearchAlt2 className="magnifier" />
            <input type="text" placeholder="Search docs" className="search" />
            <span className="slash">/</span>
          </li>
          <li>
            <BsFillBrightnessHighFill className="brightness-icon" />
          </li>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

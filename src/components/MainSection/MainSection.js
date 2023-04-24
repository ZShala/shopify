import "./MainSection.css";
import MainImg from "./main-img.png";
import LogoImg from "./img.png";
import { BsArrowUpRight } from "react-icons/bs";

const MainSection = () => {
  return (
    <div className="main-container">
      <div className="main-left-side">
        <button className="main-btn">
          Shopify Editions | Winter ’23: Explore 100+ product updates{" "}
          <BsArrowUpRight className="up-arrow" />
        </button>
        <h1>Build any commerce experience</h1>
        <hr className="main-hr" />
        <p className="main-p">
          Compose, customize, and extend every part of the commerce stack—from
          storefront to checkout to backend integrations—and create unique
          experiences for your brand or millions of merchants around the world.
        </p>
        <a href="#" className="main-a">Explore docs &rarr;</a>
      </div>
      <img src={MainImg} alt="" className="main-img" />
      <div className="main-logos">
          <img src={LogoImg} alt="" className="logo-img"/>
      </div>
    </div>
  );
};

export default MainSection;

import "./MainSection.css";
import MainImg from "./main-img.png";
import {BsArrowUpRight} from "react-icons/bs";

const MainSection = () => {
    return(
        <div className="main-container">
            <div className="main-left-side">
            <button className="main-btn">Shopify Editions | Winter ’23: Explore 100+ product updates  <BsArrowUpRight className="up-arrow"/></button>
            <h1>Build any commerce experience</h1>
            </div>
            <img src={MainImg} alt=""/>
           
        </div>
    )
}

export default MainSection;
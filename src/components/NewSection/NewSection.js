import "./NewSection.css";
import LaptopImg from "./laptop.webp";

const NewSection = () => {
  return (
    <div className="new-section">
      <div className="new-section-left">
        <h1>Best-in-class developer experience</h1>
        <hr className="new-section-hr" />
        <p className="new-section-p">
          Accelerate development, testing, and deployment with our suite of
          tools, including the Hydrogen framework, Shopify CLI, example apps,
          and development stores.
          <br/> <br/> Build quickly with official libraries for
          popular frameworks and languages from JavaScript and React to Node,
          Ruby, and PHP.
        </p>
      </div>
      <img src={LaptopImg} alt="" className="laptop-img" />
    </div>
  );
};

export default NewSection;

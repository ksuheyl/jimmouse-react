import Reviews from "../../Reviews/Reviews";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Tabs.css";

const Tabs = ({ singleProduct, setSingleProduct }) => {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };
  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "desc")}
          >
            Description
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "info")}
          >
            Additional information{" "}
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Reviews{" "}
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
        ></div>
        <p
          className="product-description"
          dangerouslySetInnerHTML={{ __html: singleProduct.description }}
        ></p>
        <div
          className={`tab-panel-information content ${
            activeTab === "info" ? "active" : ""
          }`}
        >
          <h3>Additional information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum, quidem.
                  </p>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                  <p>
                    {singleProduct.sizes.map((item, index) => (
                      <span key={index}>
                        {item.toUpperCase()}
                        {index < singleProduct.sizes.length - 1 && ", "}{" "}
                      </span>
                    ))}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Reviews
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
          active={activeTab === "reviews" ? "content active" : "content"}
        />
      </div>
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};

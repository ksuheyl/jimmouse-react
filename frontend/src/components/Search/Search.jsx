import "./Search.css";
import { message } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ isSearchShow, setIsSearchShow }) => {
  const [searchResults, setSearchResults] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleCloseSearch = () => {
    setIsSearchShow(false);
    setSearchResults(null);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const productName = e.target[0].value;
    if (productName.trim().length === 0) {
      message.warning("Please Write Something");
      return;
    }
    try {
      const res = await fetch(
        `${apiUrl}/api/products/search/${productName.trim()}`
      );
      if (!res.ok) {
        message.error("Something Went Wrong");
        return;
      }
      const data = await res.json();
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(searchResults);
  return (
    <div className={`modal-search ${isSearchShow ? "show" : ""} `}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Search for products</h3>
        <p className="modal-text">
          Start typing to see products you are looking for.
        </p>
        <form className="search-form" onSubmit={handleSearch}>
          <input type="text" placeholder="Search a product" />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>RESULTS FROM PRODUCT</h3>
          </div>
          <div
            className="results"
            style={{
              display: `${
                searchResults?.length === 0 || !searchResults ? "flex" : "grid"
              }`,
            }}
          >
            {!searchResults && (
              <b
                className="result-item"
                style={{ justifyContent: "center", width: "100%" }}
              >
                Search products...
              </b>
            )}
            {searchResults?.length === 0 && (
              <a
                href="#"
                className="result-item"
                style={{ justifyContent: "center", width: "100%" }}
              >
                The product you were looking for was not found
              </a>
            )}
            {searchResults?.length > 0 &&
              searchResults?.map((resultItem) => (
                <Link to ={`product/${resultItem._id}`} href="#" className="result-item" key={resultItem._id}>
                  <img
                    src={resultItem.image[0]}
                    className="search-thumb"
                    alt=""
                  />
                  <div className="search-info">
                    <h4>{resultItem.name}</h4>
                    <span className="search-sku">SKU: PD0016</span>
                    <span className="search-rice">
                      Discount: %{resultItem.price.discount.toFixed(2)}
                    </span>
                    <span className="search-price">
                      {resultItem.price.current.toFixed(2)}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={handleCloseSearch}
        ></i>
      </div>
      <div className="modal-overlay" onClick={handleCloseSearch}></div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  isSearchShow: PropTypes.bool,
  setIsSearchShow: PropTypes.func,
};

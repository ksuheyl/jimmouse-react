import { useContext } from "react";
import PropTypes from "prop-types";
import "./ProductItem.css";
import { CartContext } from "../../Context/CartProvider";
import { Link } from "react-router-dom";

const ProductsItem = ({ productItem }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const filteredCard = cartItems.find(
    (cartItem) => cartItem._id === productItem._id
  );

  const originalPrice = productItem.price.current;
  const discountPercentage = productItem.price.discount;
  const discountedPrice = originalPrice * ((100 - discountPercentage) / 100);
  return (
    <li className="product-item glide__slide">
      <div className="product-image">
        <Link to={`/product/${productItem._id}`}>
          <img src={productItem.image[0]} alt="" className="img1" />
          <img src={productItem.image[1]} alt="" className="img2" />
        </Link>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {productItem.name}
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
          <span className="old-price">${originalPrice.toFixed(2)}</span>
        </div>
        <span className="product-discount">-{productItem.price.discount}%</span>
        <div className="product-links">
          <button
            disabled={filteredCard}
            onClick={() =>
              addToCart({
                ...productItem,
                price: discountedPrice,
              })
            }
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <Link to={`/product/${productItem._id}`}>
            <i className="bi bi-eye-fill"></i>
          </Link>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProductsItem;
ProductsItem.propTypes = {
  productItem: PropTypes.object,
  setCartItems: PropTypes.func,
};

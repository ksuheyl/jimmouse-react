import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
const CartItem = ({ cartItem }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <tr className="cart-item">
      <td className="cart-image">
        <img src={cartItem.image[0]} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeFromCart(cartItem._id)}
        ></i>
      </td>
      <td>{cartItem.name}</td>
      <td>${cartItem.price.toFixed(2)}</td>
      <td className="product-quantity">{cartItem.quantity}</td>
      <td className="product-subtotal">
        ${(cartItem.price * cartItem.quantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

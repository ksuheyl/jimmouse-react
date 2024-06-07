import { useState, useContext } from "react";
import { message } from "antd";
import { CartContext } from "../../Context/CartProvider";

const CartCoupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupons, setAppliedCoupons] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const { cartItems, setCartItems } = useContext(CartContext);

  const applyCoupon = async () => {
    if (couponCode.trim().length === 0) {
      return message.warning("Please write something");
    }

    if (appliedCoupons.includes(couponCode)) {
      return message.warning("Coupon code already applied");
    }

    try {
      const res = await fetch(`${apiUrl}/api/coupons/code/${couponCode}`);
      if (!res.ok) {
        return message.warning("Coupon Code Is Invalid");
      }
      const data = await res.json();
      const updatedCartItems = cartItems.map((item) => {
        const updatePrice = item.price * (1 - data / 100);
        return { ...item, price: updatePrice };
      });
      setCartItems(updatedCartItems);
      setAppliedCoupons([...appliedCoupons, couponCode]);
      message.success("Coupon code applied successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input
          type="text"
          className="input-text"
          placeholder="Coupon code"
          onChange={(e) => setCouponCode(e.target.value)}
          value={couponCode}
        />
        <button type="button" className="btn" onClick={applyCoupon}>
          Apply Coupon
        </button>
      </div>
      <div className="update-cart">
        <button className="btn">Update Cart</button>
      </div>
    </div>
  );
};

export default CartCoupon;

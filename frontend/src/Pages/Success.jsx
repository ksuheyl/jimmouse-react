import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";
import { useContext, useEffect } from "react";

const Success = () => {
  const { setCartItems } = useContext(CartContext);
  useEffect(() => {
    setCartItems([]);
  }, []);
  return (
    <div className="success-page">
      <div className="container">
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="your order is completed"
          extra={[
            <Link to={"/"} key="home">
              <Button> Home</Button>
            </Link>,
            <Button key="buy">My Orders</Button>,
          ]}
        />
      </div>
    </div>
  );
};

export default Success;

import Badge from "react-bootstrap/Badge";
import { cartContext } from "../context/cartContext";
import { useContext, useState, useEffect } from "react";
export const CartWidget = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(cartContext);

  useEffect(() => {
    setTotal(
      cart?.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0)
    );
  }, [cart]);
  return (
    <div>
      <i className="bi bi-cart3"></i>
      <Badge bg="primary" pill>
        {total}
      </Badge>
    </div>
  );
};

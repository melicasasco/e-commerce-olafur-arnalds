import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "../Cart/cart.css";

function CartWidget() {
  const { items } = useContext(CartContext);
  let totalItems = 0;
  for (let i = 0; i < items.length; i++) {
    totalItems = totalItems + items[i].quantity;
  }
  return (
    <div>
      <Link to="/cart">
        <ShoppingCartOutlinedIcon  style={{paddingTop: "0.7rem"}} className="navLink" />
        <span className="navLink">{totalItems}</span>
      </Link>
    </div>
  );
}
export default CartWidget;

import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "@material-ui/core";
import "./cart.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Link } from "react-router-dom";

function Cart() {
  const { items, Clear, RemoveItem, total } = useContext(CartContext);
  return (
    <div>
      {items.length === 0 ? (
        <div className="emptyCart">
          <h2 style={{ padding: "2rem" }}>Your cart is empty</h2>
          <Link to="/Shop">
            <Button
              style={{ margin: "2rem", marginBottom: "20rem" }}
              variant="outlined"
            >
              Continue shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "#001326", padding: "19px" }}>Cart</h2>
          <div className="cartContainer">
            <div>
              <table className="tableContent">
                <tr style={{ color: "black" }}>
                  <th>Product</th>
                  <th style={{ padding: "2rem" }}>Quantity</th>
                  <th>Category</th>
                  <th style={{ padding: "2rem" }}>Price</th>
                  <th style={{ padding: "2rem" }}>Sub-Total</th>
                  <th>Remove</th>
                </tr>
                {items.map((element) => (
                  <tr style={{ height: "60px" }} key={element.item.id}>
                    <td>{element.item.name}</td>
                    <td>{element.quantity}</td>
                    <td>{element.item.category}</td>
                    <td>€ {element.item.price} </td>
                    <td>€ {element.quantity * element.item.price}</td>
                    <td>
                      <DeleteForeverIcon
                        onClick={() => {
                          RemoveItem(element);
                        }}
                        variant="outlined"
                      ></DeleteForeverIcon>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <div className="totalPrice">
              <h2 style={{ margin: "1rem" }}>Total</h2>
              <p style={{ margin: "1rem" }}>€{total}</p>
              <Link to="/checkout">
                <Button
                  style={{ padding: "4px", marginTop: "1rem" }}
                  variant="outlined"
                >
                  Proceed Checkout
                </Button>
              </Link>
            </div>
          </div>
          <div className="bottomButtons" style={{ marginTop: "330px" }}>
            <Button onClick={Clear} variant="outlined">
              Empty cart
            </Button>
            <Link to="/Shop">
              <Button style={{ margin: "2rem" }} variant="outlined">
                Continue shopping
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

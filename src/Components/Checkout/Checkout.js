import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { db } from "../../firebase";
import { Button } from "@material-ui/core";
import "./checkout.css";
import Typography from "@material-ui/core/Typography";

function Checkout() {
  const { items, total } = useContext(CartContext);
  const [user, setUser] = useState({});
  const [order, setOrder] = useState("");

  const onHandleNameChange = (e) => {
    let aux_user = user;
    aux_user.name = e.target.value;
    setUser(aux_user);
  };

  const onHandleEmailChange = (e) => {
    let aux_user = user;
    aux_user.email = e.target.value;
    setUser(aux_user);
  };

  const onHandlePhoneChange = (e) => {
    let aux_user = user;
    aux_user.phone = e.target.value;
    setUser(aux_user);
  };

  const addOrEdit = async (object) => {
    const newOrder = await db.collection("orders").add(object);
    setOrder(newOrder.id);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    let order = {
      buyer: user,
      items: items,
      date: new Date(),
      total: total,
    };
    addOrEdit(order);
  };

  return (
    <>
      {order !== "" ? (
        <div className="ordersMessage">
          <Typography variant="h5" gutterBottom>
            Thank you for your order.
          </Typography>
          <div className="totalPriceEuro">
            <Typography variant="subtitle1">
              Your purchase for a total {total} € of was processed succesfully.
            </Typography>
          </div>
          <div>
            <Typography style={{ color: "black" }}>
              Your order number is{" "}
              <span style={{ fontWeight: "bold" }}> {order} </span>
              <br></br>
              <br></br> We have emailed your order confirmation to {user.email}.
            </Typography>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div>
              <h2
                style={{
                  color: "black",
                  padding: "1rem",
                  margin: "auto",
                }}
              >
                You are buying {items.length} products - final price: {total}€
              </h2>
              <form onSubmit={onHandleSubmit} className="contenedorDelCheckout">
                <div>
                  <div class="form">
                    <div>
                      <div className="wrapper">
                        <div className="payment">
                          <h2>Customer information</h2>
                          <div class="form">
                            <div className="card space">
                              <label className="label">Name</label>
                              <input
                                type="text"
                                class="input"
                                placeholder="Your name"
                                onChange={onHandleNameChange}
                              ></input>
                            </div>
                            <div className="card space">
                              <label class="label">Phone number:</label>
                              <input
                                type="text"
                                class="input"
                                data-mask="0000 0000 0000 0000"
                                placeholder="Your phone"
                                onChange={onHandlePhoneChange}
                              ></input>
                            </div>
                            <div class="card-space">
                              <div className="card-item">
                                <label className="label">
                                  Your email adress
                                </label>
                                <input
                                  type="text"
                                  class="input"
                                  placeholder="Your email"
                                  name="email"
                                  onChange={onHandleEmailChange}
                                ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="wrapper">
                    <div className="payment">
                      <h2>Payment Gateway</h2>
                      <div class="form">
                        <div className="card space">
                          <label className="label">Card holder:</label>
                          <input
                            type="text"
                            class="input"
                            placeholder="Coding Market"
                          ></input>
                        </div>
                        <div className="card space">
                          <label class="label">Card number:</label>
                          <input
                            type="text"
                            class="input"
                            data-mask="0000 0000 0000 0000"
                            placeholder="Card Number"
                          ></input>
                        </div>
                        <div class="card-grp space">
                          <div className="card-item">
                            <label className="label">Expiry date:</label>
                            <input
                              type="text"
                              name="expiry-data"
                              class="input"
                              placeholder="00 / 00"
                              // $("input[name='expiry-data']").mask("00 / 00");
                            ></input>
                            <i class="far fa-calendar-alt"></i>
                          </div>
                          <div className="card-item">
                            <label className="label">CVC:</label>
                            <input
                              type="text"
                              class="input"
                              data-mask="000"
                              placeholder="000"
                            ></input>
                          </div>
                        </div>
                        <Button
                          type="submit"
                          variant="outlined"
                          style={{ marginTop: "2rem" }}
                        >
                          Pay now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Checkout;

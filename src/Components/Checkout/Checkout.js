import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { db } from "../../firebase";
import { Button } from "@material-ui/core";
import "./checkout.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
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
      {order != "" ? (
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
              <div className="checkoutTitle">
                <h2 style={{ color: "black" }}>
                  You are buying {items.length} products final price: {total}€
                </h2>
              </div>
            </div>
            <h2 style={{ margin: "2rem" }}>Purchase request form</h2>
            <form
              className="form-container form backgroundImage"
              onSubmit={onHandleSubmit}
            >
              <h1>Contact Information</h1>
              <br></br>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="cardName"
                  label="your email adress"
                  fullWidth
                  name="email"
                  onChange={onHandleEmailChange}
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                />
              </Grid>
              <br></br>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  name="name"
                  onChange={onHandleNameChange}
                  label="your name"
                  fullWidth
                />
              </Grid>
              <br></br>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  name="phone"
                  onChange={onHandlePhoneChange}
                  label="your phone number"
                  fullWidth
                />
              </Grid>
              <br></br>
              <h1 style={{ marginTop: "2rem" }}>Payment</h1>

              <Grid style={{ padding: "5rem" }} container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cardName"
                    label="Name on card"
                    fullWidth
                    autoComplete="cc-name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cardNumber"
                    label="Card number"
                    fullWidth
                    autoComplete="cc-number"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="expDate"
                    label="Expiry date"
                    fullWidth
                    autoComplete="cc-exp"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cvv"
                    label="CVV"
                    helperText="Last three digits on signature strip"
                    fullWidth
                    autoComplete="cc-csc"
                  />
                </Grid>
                <Grid item xs={1} md={12}>
                  <Button
                    type="submit"
                    variant="outlined"
                    style={{ marginTop: "2rem" }}
                  >
                    Pay now
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default Checkout;

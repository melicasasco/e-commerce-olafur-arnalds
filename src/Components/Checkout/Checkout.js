import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { db } from '../../firebase';
import { Button } from "@material-ui/core";

function Checkout() {
  const { items, total } = useContext(CartContext);
  const [user, setUser] = useState({});
  const [order, setOrder] = useState('');

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
    const newOrder = await db.collection('orders').add(object);
    setOrder(newOrder.id);
};

  const onHandleSubmit = (e) => {
    e.preventDefault();
    let order = {
      buyer: user,
      items: items,
      date: new Date(),
      total: total
    };
    addOrEdit(order);
  };

  return (
    <>
    {order != '' ? (
        <div>
      <h3>Su compra por un total de {total} € se procesó correctamente</h3>
      <h4>Enviamos un email a la casilla {user.email} con el detalle</h4>
      <h4>Order # {order}</h4>
      </div>
    ) : (
    <>
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h4 style={{color: 'black'}}>
            You are buying {items.length} products - final price: {total}€
          </h4>
        </div>
      </div>
      <h3>Purchase request form</h3>
      <form onSubmit={onHandleSubmit}>
        <h4>Contact Information</h4>
        <br></br>
        <input style={{width: '250px', height: '2rem', margin:'0.5rem', borderRadius: '5px'}}
          placeholder="email"
          name="email"
          onChange={onHandleEmailChange}
        ></input>
        <br></br>
        <input style={{width: '250px', height: '2rem', margin:'0.5rem', borderRadius: '5px'}}
          placeholder="name"
          name="name"
          onChange={onHandleNameChange}
        ></input>
        <br></br>
        <input style={{width: '250px', height: '2rem', margin:'0.5rem', borderRadius: '5px'}}
          placeholder="phone"
          name="phone"
          onChange={onHandlePhoneChange}
        ></input>

        <h4>Payment</h4>
        <input placeholder="card number"></input>
        <br></br>
        <input placeholder="name on card"></input>
        <br></br>
        <input placeholder="expiration date"></input>
        <br></br>
        <input placeholder="security code"></input>
        <br></br>
        <Button variant="outlined" style={{margin: '1rem'}} type="submit">Pay now</Button>
      </form>
    </div>
                
      </>
    )}
    
    </>
  );
}

export default Checkout;

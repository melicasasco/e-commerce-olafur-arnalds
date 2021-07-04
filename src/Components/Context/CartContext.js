import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const AddItem = (item, quantity) => {
    if (!IsInCart(item.id)) {
      setTotal(total + item.price*quantity);
      items.push({item: item, quantity: quantity});
    } 
  }
 
  //Remove
  const RemoveItem = (id) => {
    items.splice(
      items.findIndex((i) => i.item.id === id)
    );
  }

  //Clear
  const Clear = () => {
    setItems ([]);
    setTotal (0);
  }

  //IsInCart
  const IsInCart = (id) => {
    if (items.findIndex((i) => i.item.id == id) >= 0) {
      return true;
    } else {
      return false;
    }
  }




return (
    <CartContext.Provider value={{items, AddItem, Clear, RemoveItem, total}}>
        {props.children}
    </CartContext.Provider>
)
}
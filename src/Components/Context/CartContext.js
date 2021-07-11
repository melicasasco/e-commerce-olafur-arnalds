import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const AddItem = (itemToAdd, quantity) => {
    if (!IsInCart(itemToAdd.id)) {
      setTotal(total + itemToAdd.price * quantity);
      const newItems = Array.from(items);
      newItems.push({ item: itemToAdd, quantity: quantity });
      setItems(newItems);
    }
  }

  //Remove
  const RemoveItem = (itemToRemove) => {
    console.log(itemToRemove);
    const newItems = Array.from(items);
    const positionToRemove = newItems.findIndex((i) => i.item.id === itemToRemove.item.id);
    console.log(positionToRemove);
    setTotal(total - newItems[positionToRemove].item.price * newItems[positionToRemove].quantity);
    newItems.splice(positionToRemove, 1);
    setItems(newItems);
  }

  //Clear
  const Clear = () => {
    setItems([]);
    setTotal(0);
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
    <CartContext.Provider value={{ items, AddItem, Clear, RemoveItem, total }}>
      {props.children}
    </CartContext.Provider>
  )
}
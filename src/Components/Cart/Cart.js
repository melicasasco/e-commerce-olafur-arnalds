import React, {useContext} from 'react';
import { CartContext } from '../Context/CartContext';
import { Button } from '@material-ui/core';
import './cart.css';


function Cart() {
	const {items, AddItem, Clear, RemoveItem} = useContext(CartContext);
    return (
        <div>


        	{items.length == 0 ? (
				<div>
					Your cart is empty
				</div>
			) : (
                <div>
                    <h2 style={{color: '#001326', padding: '19px' }}>Cart</h2>
                    <div className="cartContainer">
                        {items.map((element) => (
                        <div key={element.item.id}> 
                        
                            <p>Product: {element.item.name}</p>
                            <p>Category: {element.item.category}</p>
                            <p>Quantity: {element.quantity}</p>
                            <p>Total price : {element.quantity*element.item.price}€</p>

                        <div className="price">

                        </div>
                        <Button onClick={RemoveItem} variant="outlined">Remove</Button>
                        </div>))}
                    </div>
                    <div>
                      <Button onClick={Clear} variant="outlined">Empty cart</Button>
                    </div>
                        
                 </div>
            )} 

        </div>
    )
    

}

export default Cart;



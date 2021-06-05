import React from 'react';
import shoppingCart from './shoppingCart.png';

function CartWidget() {
    return (
        <div>
            <img src={shoppingCart} alt="cart"></img>
        </div>
    )
}

export default CartWidget;

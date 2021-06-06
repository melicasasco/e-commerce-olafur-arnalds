import React from 'react';
import oli from './oli.jpg';

function ItemListContainer({text}) {
    return (
        <div>
            <h1>This is {text}</h1>
            <img src={oli}></img>
        </div>
    )
}

export default ItemListContainer

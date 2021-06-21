import React from 'react';
import './Item.css';
import ItemCount from './ItemCount';



function Item(props) {
    const onAdd = (cantidad) => {
        console.log('Agregar al carrito', cantidad);
    }
    return (
        <div className='container'>
           <div className='card-container'>
                <div className='image-container'>
                    <img src={props.imagenUrl} alt=''></img>
                </div>
                <div className='card-content'>
                    <div className='card-name'>
                        <h4>{props.name}</h4>
                    </div>
                </div>
                <div className='card-body'>
                    <p>{props.category}</p>
                </div>
                <div className='button'>
                <ItemCount 
                    stock= {props.stock}
                    initial = '1'
                    onAdd={onAdd}>
                </ItemCount>
                </div>
            </div>
            </div>
    )
}

export default Item;


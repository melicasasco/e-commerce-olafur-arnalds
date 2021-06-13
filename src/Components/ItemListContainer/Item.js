import React from 'react'
import UserCard from '../UserCard/UserCard';

function Item(props) {

    return (
        <UserCard
            title = {props.name}
            type = {props.type}
            imagenUrl = {props.imagenUrl}
            stock = {props.stock}>
            
        </UserCard>
    );
}

export default Item;

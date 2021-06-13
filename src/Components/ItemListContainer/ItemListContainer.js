import React from 'react';
import ItemCount from './ItemCount';
import { ItemList } from './ItemList';

function ItemListContainer() {
    
    return (
        <div>
            <div className='cards'>
            <ItemList />
            </div>

        </div>
    )
}

export default ItemListContainer;

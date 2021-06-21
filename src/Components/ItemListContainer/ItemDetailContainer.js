import React, {useEffect, useState } from 'react';
import axios from 'axios';
import ItemDetail  from './ItemDetail';
import '../Header/Header.css';

function ItemDetailContainer({match}) {
     let itemId = parseInt(match.params.id);
     const [item, setItem] = useState ([]);

     useEffect(() => {
        axios('../data.json').then((res) => setItem (res.data.filter((element) => element.id == itemId)));
     }, []);

    return (
        <>
        {item.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
        <>
            <ItemDetail key={item[0].id}
                        price={item[0].price}
                        name={item[0].name}
                        category={item[0].category}
                        imagenUrl={item[0].imagenUrl}
                        stock={item[0].stock}
                        description={item[0].description}>  
            </ItemDetail>
                    
          </>
        )}
        </>
      )
}

export default ItemDetailContainer;

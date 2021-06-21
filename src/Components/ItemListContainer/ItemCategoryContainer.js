import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Item from './Item';
import ShopNavigation from '../Navigation/ShopNavigation';

function ItemCategoryContainer({match}) {

    let itemCategory = match.params.id;
    const [category, setCategory] = useState ([]);
    console.log(itemCategory);
    useEffect(() => {
       axios('../data.json').then((res) => setCategory (res.data.filter((element) => element.category == itemCategory)));
    }, [itemCategory]);
    console.log(category);
    return (
        <>
        {category.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
        <>
        <ShopNavigation className="shopMenu" />
           <ul className="cards">
            {category.map((element) => (
              <Link to={`/detail/${element.id}`} key={element.id}>
                <Item key={element.id}
                      name={element.name}
                      category={element.category}
                      imagenUrl={element.imagenUrl}
                      stock={element.stock}>
                </Item>
              </Link>
            ))}
          </ul>
              
        </>
        )}
        </>
      )
}

export default ItemCategoryContainer

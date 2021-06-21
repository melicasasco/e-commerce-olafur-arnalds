import React, { useState, useEffect } from "react";
import './Item.css';
import Item from './Item';
import axios from 'axios';
import { Link } from "react-router-dom";


export const ItemList = () => {
  const [dataToShow, setDataToShow] = useState([]);

  const miData = () => {
    setTimeout(
      () => axios('./data.json').then((res) => setDataToShow(res.data)), 2000);
  };
  
  useEffect(() => {
    miData(); 
	}, []);

  return (
    <>
      {dataToShow.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
    
          <ul className="cards">
            {dataToShow.filter((element) => element.destacado)
             .map((element) => (
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
  );
};

export default ItemList;
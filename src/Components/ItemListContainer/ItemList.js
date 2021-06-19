import React, { useState, useEffect } from "react";
import './Item.css';
import Item from './Item';
import axios from 'axios';


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
            {dataToShow.map((element) => (
                <Item key={element.id}
                      name={element.name}
                      type={element.type}
                      imagenUrl={element.imagenUrl}
                      stock={element.stock}>
                </Item>
            ))}
          </ul>

        </>
      )}
    </>
  );
};

export default ItemList;
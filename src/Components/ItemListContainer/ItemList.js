import React, { useState, useEffect } from "react";
import '../UserCard/UserCard.css';
import Item from './Item';


const ItemListData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, type: 'vinyl', name: "Some Kind of Peace", imagenUrl: 'https://cdn.shopify.com/s/files/1/0017/4679/6595/products/OA_SKOP_digital_album_cover_bb14683c-9de1-4e7d-bda8-f0234817a4b1_600x.jpg?v=1606989903', price: '40', stock : '5' },
          { id: 2, type: 'vinyl', name: "The Chopin Project", imagenUrl: 'https://cdn.shopify.com/s/files/1/0017/4679/6595/products/OA13_LP_8dfe7f66-9d69-4129-8a6a-af9cee67d94b_400x.jpg?v=1523285391', price: '35', stock : '6' },
          { id: 3, type: 'vinyl', name: "Re:member", imagenUrl: 'https://cdn.shopify.com/s/files/1/0017/4679/6595/products/OA_AlbumCover_title_3000x3000_b889ca50-d120-410d-b9df-3e04478769e3_400x.jpg?v=1534759117', price: '20', stock : '2' },
          { id: 4, type: 'cd', name: "Island Songs", imagenUrl: '', price: '30', stock : '50' },
          { id: 5, type: 'cd', name: "Re:member", imagenUrl: '', price: '29', stock : '20' }
        ]),
      2500
    );
  });
};

export const ItemList = () => {
  const [dataToShow, setDataToShow] = useState([]);

  const miData = () => {
    ItemListData().then((data) => {
      const dataFiltrada = data.filter((element) => element.type == 'vinyl');
      setDataToShow(dataFiltrada);
    });
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
                <Item name={element.name}
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
import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((e) => (
        <Item
          key={e.id}
          title={e.titulo}
          description={e.descripcion}
          price={e.precio}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default ItemList;
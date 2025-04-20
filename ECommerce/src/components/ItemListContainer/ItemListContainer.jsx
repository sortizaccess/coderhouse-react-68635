import React from "react";
import ItemList from './ItemList'

const ItemListContainer = () => {

  const products = [
    {
      id: 1,
      image: '',
      name: 'Producto 1',
      description: 'Descripción 1',
      price: '100',
      stock: 1
    },
    {
      id: 2,
      image: '',
      name: 'Producto 2',
      description: 'Descripción 2',
      price: '100',
      stock: 2
    },
    {
      id: 3,
      image: '',
      name: 'Producto 3',
      description: 'Descripción 3',
      price: '100',
      stock: 3
    },
    {
      id: 4,
      image: '',
      name: 'Producto 1',
      description: 'Descripción 1',
      price: '100',
      stock: 1
    },
    {
      id: 5,
      image: '',
      name: 'Producto 2',
      description: 'Descripción 2',
      price: '100',
      stock: 2
    },
    {
      id: 6,
      image: '',
      name: 'Producto 3',
      description: 'Descripción 3',
      price: '100',
      stock: 3
    }    
  ]


  return (
    <div className="pt-5">
      <ItemList items={products} />
    </div>
  )
};

export default ItemListContainer;

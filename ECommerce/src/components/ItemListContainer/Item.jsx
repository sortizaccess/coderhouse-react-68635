import React from "react";
import { Card } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import DefaultImage from '../../assets/image.jpg';
import { useState } from 'react'


const Item = ({ item }) => {
  const [itemCounter, setItemCounter] = useState(0)

  const addItem = () => {
    setItemCounter(itemCounter + 1)
  }
  const subtractItem = () => {
    setItemCounter(itemCounter - 1)
  }

  return (
    <div>
      <Card className="shadow-sm hover-shadow-lg transition-all" style={{ minHeight: '320px' }}>
        <Card.Img 
          variant="top" 
          style={{ height: '180px', objectFit: 'cover' }} 
          src={item.image || DefaultImage}
        />

        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="mb-3 fw-bold text-dark">{item.name}</Card.Title>
            <Card.Text className="text-secondary small mb-4" style={{ lineHeight: 1.3 }}>
              {item.description}
            </Card.Text>
          </div>

          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="h5 fw-semibold mb-0">
                ${new Intl.NumberFormat('es-AR').format(item.price)}
              </span>
              <Badge pill bg="light" text="dark" className="py-2">
                Stock: {item.stock || 0}
              </Badge>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-2">
              <CustomButton 
                icon={faPlus} 
                variant="outline-success" 
                className="rounded-circle p-2"
                disabled={itemCounter === item.stock}
                onClick={addItem}
              />
              
              <span className="fw-bold fs-5 mx-2" style={{ minWidth: '2rem', textAlign: 'center' }}>
                {itemCounter}
              </span>
              
              <CustomButton 
                icon={faMinus} 
                variant="outline-danger" 
                className="p-2"
                disabled={itemCounter === 0}
                onClick={subtractItem}
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
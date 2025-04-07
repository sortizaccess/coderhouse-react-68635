import React from "react";
import { Button, Card } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";

const Item = ({ id, title, description, price }) => {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <h5>Producto Test</h5>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <CustomButton
            type="success"
            label="Ver"
            onClick={() => {
              console.log("onClick event");
            }}
          />
          <CustomButton
            type="success"
            label="Agregar al Carrito"
            style={{ margin: "10px" }}
            onClick={() => {
              console.log("onClick event");
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
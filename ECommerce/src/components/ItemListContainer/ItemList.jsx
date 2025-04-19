import React from "react";
import Item from "./Item";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({ items }) => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
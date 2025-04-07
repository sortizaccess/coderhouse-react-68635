import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import CustomButton from "../CustomButton/CustomButton"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    //Usar CustomButton
    <Button variant="dark">
        <FontAwesomeIcon icon={faCartShopping} className="me-2" />
        <Badge bg="secondary">0</Badge>
    </Button>
  )
}

export default CartWidget
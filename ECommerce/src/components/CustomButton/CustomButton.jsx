import { Button } from "react-bootstrap";
import React from "react";

const CustomButton = ({ label, type, onClick, ...e }) => {
  return (
    <>
      <Button variant={type} onClick={onClick} {...e}>
        {label}
      </Button>
    </>
  );
};

export default CustomButton;
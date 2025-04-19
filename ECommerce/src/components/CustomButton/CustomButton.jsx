import { Button } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomButton = ({ label, type, onClick, icon, ...e }) => {
  return (
    <>
      <Button variant={type} onClick={onClick} {...e} className="btn btn-sm">
        {label} 
        {icon && <FontAwesomeIcon icon={icon} />}
      </Button>
    </>
  );
};

export default CustomButton;
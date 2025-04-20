import React from "react";

const Footer = () => {
    return (   
        <div className='text-center p-2 mt-5' style={{ backgroundColor: 'rgba(15, 15, 15, 0.95)' }}>
            <i><span className="text-secondary small">&copy; {new Date().getFullYear()} eCommerce</span></i>
        </div>
    );
};

export default Footer;
import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import errorImg from "../images/ErrorPage404-03.jpg"

function Error404() {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Navbar toggle={toggle} />
            <img src={errorImg} alt="Error-404" className="error-404-img" />
            <Footer />
        </>
    );
}

export default Error404;

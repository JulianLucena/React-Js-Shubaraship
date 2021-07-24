import React from "react";
import Img_Logo from "./Img-Logo-Ship.png"
import { Link } from "react-router-dom";

const LogoWidget = () => {
    return(
        <Link to="/"><img className = "Logo" src = {Img_Logo} alt = "Imagen del Barquito"></img></Link>            
    );
};

export default LogoWidget

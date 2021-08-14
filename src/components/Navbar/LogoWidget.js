import React from "react";
import Img_Logo from "./Img-Logo-Ship.png"
import Shubalogo from "./Shubaraship-Logo.png"
import { Link } from "react-router-dom";

const LogoWidget = () => {
    return(
        <Link to="/"><img className = "Logo" src = {Shubalogo} alt = "Imagen del Barquito"></img></Link>            
    );
};

export default LogoWidget

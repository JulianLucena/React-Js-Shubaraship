import React from "react";
import CardWidget from "./CartWidget";
import LogoWidget from "./Img_Logo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <LogoWidget />           

            <button className="NavBtn">Videojuegos</button>
            <button className="NavBtn">Mangas y Cómics</button>
            <button className="NavBtn">Figuras Coleccionables</button>
            <button className="NavBtn">Juegos de mesa</button> 
                        
            {/* <CardWidget />  */}         
        </nav>                
    );
};

export default Navbar;
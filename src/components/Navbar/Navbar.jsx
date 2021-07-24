import React from "react";
import CardWidget from "./CartWidget";
import LogoWidget from "./Img_Logo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <LogoWidget />           

            <Link to="/categorias/videojuegos" className="NavBtn">Videojuegos</Link>
            <Link className="NavBtn">Mangas y Cómics</Link>
            <Link className="NavBtn">Figuras Coleccionables</Link>
            <Link className="NavBtn">Juegos de mesa</Link> 
                        
            {/* <CardWidget />  */}         
        </nav>                
    );
};

export default Navbar;
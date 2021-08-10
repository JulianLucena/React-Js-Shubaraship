import React from "react";
import CardWidget from "./CartWidget";
import LogoWidget from "./Img_Logo";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="nav">
            <LogoWidget />                    
            <Link to="/categoria/videojuegos" className="NavBtn">Videojuegos</Link>
            <Link to="/categoria/mangas" className="NavBtn">Mangas</Link>
            <Link to="/categoria/figuras" className="NavBtn">Figuras Coleccionables</Link>
            <Link to="/categoria/tcgs" className="NavBtn">Trading Card Games</Link>
            <CardWidget />                        
        </nav>                
    );
};

export default Navbar;
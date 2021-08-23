import React from "react";
import CardWidget from "./CartWidget";
import LogoWidget from "./LogoWidget";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
                <div class="container-fluid">
                    <LogoWidget />   
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav d-flex align-items-center">                    
                            <Link to="/categoria/videojuegos">
                                <button class="nav-link link align-middle NavBarText">Videojuegos</button>
                            </Link>
                            <Link to="/categoria/mangas">
                                <button class="nav-link link NavBarText">Mangas</button>
                            </Link>   
                            <Link to="/categoria/figuras">
                            <button class="nav-link link NavBarText">Figuras Coleccionables</button>
                            </Link>
                            <Link to="/categoria/tcgs">
                                <button class="nav-link link NavBarText">Trading Card Games</button>
                            </Link>        
                            <Link to="/opiniones">
                                <button class="nav-link link NavBarText">¡Dejanos tu opinión!</button>
                            </Link>
                        </div>
                    </div>
                    <CardWidget class="link" style = {{float:"right"}}/>   
                </div>
            </nav>
        </div>                     
    );
};

export default Navbar;
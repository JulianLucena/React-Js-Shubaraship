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
                                <a class="nav-link link align-middle NavBarText">Videojuegos</a>
                            </Link>
                            <Link to="/categoria/mangas">
                                <a class="nav-link link NavBarText">Mangas</a>
                            </Link>   
                            <Link to="/categoria/figuras">
                            <a class="nav-link link NavBarText">Figuras Coleccionables</a>
                            </Link>
                            <Link to="/categoria/tcgs">
                                <a class="nav-link link NavBarText">Trading Card Games</a>
                            </Link>        
                            <Link to="/opiniones">
                                <a class="nav-link link NavBarText">¡Dejanos tu opinión!</a>
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
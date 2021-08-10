import React from "react";
import CardWidget from "./CartWidget";
import LogoWidget from "./Img_Logo";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {

    return (
        <div>
            {/* <nav className="nav">
                <LogoWidget />                    
                <Link to="/categoria/videojuegos" className="NavBtn">Videojuegos</Link>
                <Link to="/categoria/mangas" className="NavBtn">Mangas</Link>
                <Link to="/categoria/figuras" className="NavBtn">Figuras Coleccionables</Link>
                <Link to="/categoria/tcgs" className="NavBtn">Trading Card Games</Link>
                <CardWidget />                        
            </nav>  */}
            {/* <nav class="navbar navbar-dark bg-dark"> */}

            <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
            <div class="container-fluid">
                {/* <a class="navbar-brand" href="#">Shubaraship</a> */}
                <LogoWidget />   
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">                    
                    <Link to="/categoria/videojuegos">
                      <a class="nav-link" href="#">Videojuegos</a>
                    </Link>
                    <Link to="/categoria/mangas">
                        <a class="nav-link" href="#">Mangas</a>
                    </Link>   
                    <Link to="/categoria/figuras">
                       <a class="nav-link" href="#">Figuras Coleccionables</a>
                    </Link>
                    <Link to="/categoria/tcgs">
                        <a class="nav-link" href="#">Trading Card Games</a>
                    </Link>    
                    <CardWidget />                
                </div>
                </div>
            </div>
            </nav>
        </div>                     
    );
};

export default Navbar;
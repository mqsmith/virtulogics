import React from "react";


function Nav() {
    return (
        // SIMPLE NAV SHELL
        //
        // TODO: Add links
        // TODO: Change Layout
        // TODO: 
        
        <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Virtulogics</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Test Button 1</button></a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
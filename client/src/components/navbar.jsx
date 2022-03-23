import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-left" id='navBar'>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Tarane Talebi</a>
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#home">Home</a>
                            <a class="nav-link" href="#aboutme">About</a>
                            <a class="nav-link" href="#skillType">Skills</a>
                            <a class="nav-link" href="#">Services</a>
                            <a class="nav-link" href="#contactMe">Contact</a>

                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
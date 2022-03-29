import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-left" id='NavBar'>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Tarane Talebi</a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#home">Home</a>
                            <a class="nav-link" href="#About-Me">About</a>
                            <a class="nav-link" href="#Skills">Skills</a>
                            <a class="nav-link" href="#Projects">Projects</a>
                            <a class="nav-link" href="#Contact-Me">Contact</a>

                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
import React from "react";
import classes from './Header.module.css'
import {Navbar} from "react-bootstrap";

let Header = () => {
    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="http://pngimg.com/uploads/chrome_logo/chrome_logo_PNG3.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Lupers
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header;
import React from "react";
import logo from '../Church new logo.png';
import Navmenu from "./Navmenu.js";
import './styles/Header.css';

const Header = () =>{

    return(
        <div className="header-body">
      <header>
        <img src={logo} alt="logo" className="logo"></img>
        <div className="navmenu">
            <Navmenu/>
            </div>
      </header>

    </div>
    )

}

export default Header;
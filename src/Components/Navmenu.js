import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import './styles/Navmenu.css';

const Navmenu = () =>{
    return(
        <Router>
            <div className="nav-body" >
        <ul>
            <li onClick={()=>window.location.reload()}><NavLink activeStyle={{backgroundColor:"#7fcfd6",color:"#fff",border:"none",padding:9,borderRadius:50}} className="link" to="/Home">Home</NavLink></li>
            <li onClick={()=>window.location.reload()}><NavLink activeStyle={{backgroundColor:"#7fcfd6",color:"#fff",border:"none",padding:9,borderRadius:50}} className="link" to="/About">About</NavLink></li>
            <li onClick={()=>window.location.reload()}><NavLink activeStyle={{backgroundColor:"#7fcfd6",color:"#fff",border:"none",padding:9,borderRadius:50}} className="link" to="/Prayer">Prayer Requests</NavLink></li>
            <li onClick={()=>window.location.reload()}><NavLink activeStyle={{backgroundColor:"#7fcfd6",color:"#fff",border:"none",padding:9,borderRadius:50}} className="link" to="/Ministries">Ministries</NavLink></li>
            <li onClick={()=>window.location.reload()}><NavLink activeStyle={{backgroundColor:"#7fcfd6",color:"#fff",border:"none",padding:9,borderRadius:50}} className="link" to="/Watch">Watch</NavLink></li>

        </ul>
        </div>
        </Router>
    )
}

export default Navmenu;
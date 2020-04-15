import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar(){
    return (
        <ul className="color nav">
           <li className="nav-item">
            <Link className="color nav-link"
               to="/home"
               >Home</Link>   
           </li>
           <li className="nav-item">
               <Link className= "color nav-link"
               to="/list"
               >List</Link>
           </li>    
           <li className="nav-item">
               <Link className= "color nav-link"
               to="/search"
               >Search</Link>
           </li>         
        </ul>
    )
}

export default NavBar
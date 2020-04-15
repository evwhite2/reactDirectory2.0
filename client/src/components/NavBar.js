import React from "react";
import { Link } from "react-router-dom";


function NavBar(){
    return (
        <ul className="nav">
           <li className="nav-item">
            <Link className="nav-link"
               to="/home"
               >Home</Link>   
           </li>
           <li className="nav-item">
               <Link className= "nav-link"
               to="/list"
               >List</Link>
           </li>    
           <li className="nav-item">
               <Link className= "nav-link"
               to="/search"
               >Search</Link>
           </li>         
        </ul>
    )
}

export default NavBar
import React from "react";

function Results(props){
    return(
        <ul className="list-group">
        {props.results && props.results.length > 0 ? props.results.map(r => (
        <li key={r.ID} className="list-group-item">
            <div>ID: {r.ID}</div>
            <div>Name:{r.first_name} {r.last_name}</div> 
            <div>Title: {r.Title}</div>
            <div>Email: {r.email}</div>
        </li>
)): (<li className="list-group-item">
<div>ID: </div>
<div>Name: </div> 
<div>Title: </div>
<div>Email: </div>
</li>)}    
        </ul>
    )
}
 export default Results
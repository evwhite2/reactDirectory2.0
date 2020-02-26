import React from "react";

function Results(props){
    return(
        <ul className="list-group">
          
                <li key={props.results.ID} className="list-group-item">
                    ID: {props.results.ID}
                    <div>
                    Name: {props.results.first_name} {props.results.last_name}
                    </div> 
                </li>
        
        </ul>
    )
}
 export default Results
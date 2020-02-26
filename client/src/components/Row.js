import React from "react"

function Row(props){
    return(
            <tbody>
                <tr>
                <th scope="row">{props.ID}</th>
                <td>{props.first_name}</td>
                <td>{props.last_name}</td>
                <td>{props.email}</td>
                <td>{props.title}</td>
                </tr>
            </tbody>
  
    )
}

export default Row
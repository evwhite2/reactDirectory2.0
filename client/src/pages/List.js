import React, { Component } from "react";

import employees from  "../employees.json";
import Container from "../components/Container"
import Row from "../components/Row";
import TableHead from "../components/TableHead";

class List extends Component {
  state = {
    employees
  };

  render() {
  return (
    <Container>
    <br/>
      <h1 className="logo">Employee Directory</h1>
      <table className="table">

        <TableHead/>
        {this.state.employees.map(employee=>(
          <Row 
          key={employee.ID}
          ID= {employee.ID}
          first_name={employee.first_name}
          last_name={employee.last_name}
          email={employee.email}
          title= {employee.Title}
          />
        ))}

      </table>
        
    </Container>
  );
}

}


export default List;

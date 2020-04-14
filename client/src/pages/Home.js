import React, { Component } from "react";

import employees from  "../employees.json";
import Wrapper from "../components/Wrapper"
import Row from "../components/Row";
import TableHead from "../components/TableHead";

class Home extends Component {
  state = {
    employees
  };

  render() {
  return (
    <Wrapper>

      <h1>Employee Directory</h1>
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
        
    </Wrapper>
  );
}

}


export default Home;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";

import employees from  "./employees.json";
import Container from "./components/Container";
import Row from "./components/Row";
import TableHead from "./components/TableHead";

class App extends Component {
  state = {
    employees,
    Home,
    Search
  };

  render() {
  return (
    <Container>
      <Router>
      <NavBar />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/search" component={Search} />
      </div>
      </Router>

      
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

export default App;


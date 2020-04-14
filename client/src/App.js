import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Container from "./components/Container";


class App extends Component {
  state = {
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

    </Container>
  );
}

}

export default App;


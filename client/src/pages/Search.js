import React, {Component} from "react";
import API from "../utils/API";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";
import employees from "../employees.json";

class Search extends Component {

  state = {
    searchVal: "",
    searchBy: "",
    results: "",
    error: "",
    employees
  };


  handleInputChange = event => {
    this.setState({ searchVal: event.target.value });
  };

  handleSearchSelector = event =>{
    this.setState({ searchBy: event.target.value }, () => console.log(this.state));
  }

  handleFormSubmit = event =>{
    event.preventDefault();
    switch (this.state.searchBy){
      case "":
        alert("Please made a search by selection.")
        break;
      case "ID":
        this.setState({results: API.searchID(this.state.searchVal, this.state.employees)});
        break;
      case "first_name":
        this.setState({results: API.searchFN(this.state.searchVal,this.state.employees)});
        break;
      case "last_name":
        this.setState({results: API.searchLN(this.state.searchVal,this.state.employees)});
        break;
      case "email":
        this.setState({results: API.searchEmail(this.state.searchVal,this.state.employees)});
        break;
      case "Title":
        this.setState({results: API.searchTitle(this.state.searchVal,this.state.employees)});
    }
    }

  render() {
    return (
    <div>
      <SearchForm
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
      handleSearchSelector={this.handleSearchSelector}
      />
    <Results results={this.state.results}/>
    </div>  
      )
    }
}

export default Search;

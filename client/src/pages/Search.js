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
    console.log(this.state)
  };

  handleSearchSelector = event =>{
    this.setState({ searchBy: event.target.value });
    console.log(this.state)
  }

  handleFormSubmit = event =>{
    event.preventDefault();
    if(this.state.searchBy==="null"){
      alert("Please made a search by selection.")
    }else{
      alert("serching")
      this.state.employees.filter(emp=>{

        switch(this.state.searchBy){
          case "ID":
              if(emp.ID===this.state.searchVal){
                  this.setState({results: emp})}
          break;
          case "first_name":
              alert("search seleciton = first name")
        }
      
      }) 
    }
    }
    

  render() {
    return (
    <div>
      <SearchForm
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
      />
      <Results results={this.state.results}/>
    </div>  
      )
    }
}

export default Search;

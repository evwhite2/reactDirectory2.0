import React, {Component} from "react";
import API from "../utils/API";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";
import Modal from "../components/Modal/Modal";
import Container from "../components/Container";
import employees from "../employees.json";

import "./style.css";

class Search extends Component {

  state = {
    searchVal: "",
    searchBy: "",
    results: [],
    error: "",
    employees,
    Modal:"",
    noResult:""
  };


  handleInputChange = event => {
    var userInput = event.target.value;
    userInput.toLowerCase();
    console.log("user input", userInput);
    this.setState({ searchVal: event.target.value });
  };

  handleSearchSelector = event =>{
    this.setState({ searchBy: event.target.value }, () => {return});
  }

  closeModal = event =>{
    this.setState({Modal: ""}, ()=>{
      this.setState({noResult: ""}, ()=>{return})
    })
  }

 handleFormSubmit = event =>{
    event.preventDefault();
    
    switch (this.state.searchBy){
      default:
          this.setState({Modal: "active"})
          break;
      case "":
        this.setState({Modal: "active"}, ()=>{console.log("alert")})
        break;
      case "ID":
        this.setState({results: API.searchID(this.state.searchVal, this.state.employees)}, ()=>{this.handleNone()});
        break;
      case "first_name":
        this.setState({results: API.searchFN(this.state.searchVal,this.state.employees)}, ()=>{this.handleNone()})
        break;
      case "last_name":
        this.setState({results: API.searchLN(this.state.searchVal,this.state.employees)}, ()=>{this.handleNone()});
        break;
      case "email":
        this.setState({results: API.searchEmail(this.state.searchVal,this.state.employees)}, ()=>{this.handleNone()});
        break;
      case "Title":
        this.setState({results: API.searchTitle(this.state.searchVal,this.state.employees)}, ()=>{this.handleNone()});
    }
    
  }

    handleNone = () =>{
      if(this.state.results.length > 0){
          return;
      }else{
        this.setState({noResult: "active"}, ()=>{
          return;
      })
    }
  }

  render() {
    return (
      <Container>
        <br/>
        <SearchForm
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        handleSearchSelector={this.handleSearchSelector}
        resultForm={this.state.resultForm}
        />
        <br/> <br/>
        <Results results={this.state.results}/>

        {/* Modals */}
        <Modal
        Modal= {this.state.Modal}
        alert="Please make a search by selection."
        closeModal= {this.closeModal}
        />
        <Modal
        noResult= {this.state.noResult}
        alert="No results found for your search."
        closeModal= {this.closeModal}
        />

    </Container>
      )
    }
}

export default Search;

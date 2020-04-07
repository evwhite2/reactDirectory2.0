import React, {Component} from "react";
import API from "../utils/API";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";
import Modal from "../components/Modal/Modal";
import employees from "../employees.json";

class Search extends Component {

  state = {
    searchVal: "",
    searchBy: "",
    results: "",
    error: "",
    employees,
    Modal:""
  };


  handleInputChange = event => {
    this.setState({ searchVal: event.target.value });
  };

  handleSearchSelector = event =>{
    this.setState({ searchBy: event.target.value }, () => console.log(this.state));
  }

  closeModal = event =>{
    console.log("state of Modal:", this.state.Modal)
    this.setState({Modal: ""}, ()=>{
      console.log("closed")
    })
  }

  handleFormSubmit = event =>{
    event.preventDefault();
    switch (this.state.searchBy){
      case "":
        this.setState({Modal: "active"}, ()=>{console.log("alert")})
        break;
      case "ID":
        this.setState({results: API.searchID(this.state.searchVal, this.state.employees)});
        break;
      case "first_name":
        this.setState({results: API.searchFN(this.state.searchVal,this.state.employees)})
        break;
      case "last_name":
        this.setState({results: API.searchLN(this.state.searchVal,this.state.employees)});
        break;
      case "email":
        this.setState({results: API.searchEmail(this.state.searchVal,this.state.employees)});
        break;
      case "Title":
        this.setState({results: API.searchTitle(this.state.searchVal,this.state.employees)});
        default:
          this.setState({Modal: "active"})
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
    <Modal
    Modal= {this.state.Modal}
    alert="Please make a search by selection."
    closeModal= {this.closeModal}
    />
    </div>  
      )
    }
}

export default Search;

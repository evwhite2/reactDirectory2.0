import React from "react";

var styleForm={
  maxWidth:"250px",
  border:"black 1px solid", 
  height:"30px",
  marginLeft:"5px"
}

var styleBtn={
  marginLeft:"25px",
}


function SearchForm(props){
    return (
        <div>
          <h1>Search</h1>
        <form className="searchForm">
            <input 
            style={styleForm}
            value={props.searchVal}
            onChange={props.handleInputChange}
            name="searchVal"
            type ="text" 
            id="searchVal"
            />
            <select 
            style={styleForm}
            name="searchBy"
            id="searchBy"
            value={props.searchBy}
            onChange={props.handleSearchSelector}>
              <option value="null">Please Select</option>
              <option value="ID">ID</option>
              <option value="first_name">First Name</option>
              <option value="last_name">Last Name</option>
              <option value="email">Email</option>
              <option value="Title">Title</option>
            </select>
            <button
            style={styleBtn}
            type="submit"
            onClick= {props.handleFormSubmit} className="btn btn-success">
                Search
            </button>
        </form>
        </div>
    )
}

export default SearchForm
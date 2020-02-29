import React from "react";

function SearchForm(props){
    return (
        <div>
          <h1>Search</h1>
        <form className="searchForm">
            <input 
            value={props.searchVal}
            onChange={props.handleInputChange}
            name="searchVal"
            type ="text" 
            id="searchVal"
            />
            <select 
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
            type="submit"
            onClick= {props.handleFormSubmit} className="btn btn-success">
                Search
            </button>
        </form>
        </div>
    )
}

export default SearchForm
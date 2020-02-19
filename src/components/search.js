import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state= {
      search: ''
    };
  }

  updateSearch
  handleChange(event) {
    console.log(event.target.value)
  };

  render() {
    return (
      <div>
        <ul>
        
        <input type="text" 
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}/>
      </div>
    );
  }
}

export default Search;
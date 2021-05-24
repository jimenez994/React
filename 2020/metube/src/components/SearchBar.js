import React from 'react';

class SearchBar extends React.Component{

  state = { searchInput: "" }
  
  onChange = (event) => {
    this.setState({searchInput: event.target.value})
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    this.props.onSearchInputSubmit(this.state.searchInput);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmitForm}>
          {/* <label>Video Search </label> */}
          <input type="text" placeholder="Search " value={this.state.searchInput} onChange={this.onChange}></input>
        </form>
      </div>
    )
  }
}

export default SearchBar;
import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search for an Image</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={event =>
                this.setState({ searchTerm: event.target.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

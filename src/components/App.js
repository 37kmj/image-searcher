import React, { Component } from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = { imageList: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ imageList: response.data.results });
    console.log(this.state.imageList.length);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.imageList} />
      </div>
    );
  }
}

export default App;

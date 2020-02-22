import React, { Component } from "react";
import unsplash from "../api/UnSplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends Component {
  state = { images: [] };
  onSearchSubmit = async searchText => {
    const response = await unsplash.get("/search/photos", {
      params: { query: searchText }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    this.videoSearch("drum breaks");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, data => {
      this.setState({
        video: data
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

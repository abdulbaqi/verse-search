import React from "react";
import SearchVerse from "./SearchVerse";
import axios from "axios";
import DisplayVerses from "./DisplayVerses";

class App extends React.Component {
  state = { verses: [], count: null };

  onFormSubmit = async term => {
    const url = `http://api.alquran.cloud/v1/search/${term}/all/en.sahih`;
    const response = await axios.get(url);
    console.log(response.data.data.matches);
    const tmp = [];
    response.data.data.matches.forEach(d => {
      tmp.push(d.text);
    });
    console.log(tmp);

    this.setState({
      count: response.data.data.count,
      verses: tmp
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchVerse onSubmit={this.onFormSubmit} />
        <DisplayVerses count={this.state.count} verses={this.state.verses} />
      </div>
    );
  }
}

export default App;

import React from "react";
import SearchVerse from "./SearchVerse";

class App extends React.Component {
  onFormSubmit = term => {
    console.log(`we are searching for ${term}`);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchVerse onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;

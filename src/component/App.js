import React from "react";
import SearchVerse from "./SearchVerse";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchVerse />
      </div>
    );
  }
}

export default App;

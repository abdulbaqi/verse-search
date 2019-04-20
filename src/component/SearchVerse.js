import React from "react";

class SearchVerse extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Enter search term:</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchVerse;

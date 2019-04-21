import React from "react";

class SearchVerse extends React.Component {
  state = { term: "" };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="focus field">
            <input
              type="text"
              placeholder="Enter search term(s) and press 'Enter'"
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchVerse;

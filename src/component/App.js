import React from "react";
import SearchVerse from "./SearchVerse";
import axios from "axios";
import DisplayVerses from "./DisplayVerses";
import "./style.css";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { verses: [], count: null, term: null, loading: false };

  onFormSubmit = async term => {
    const url = `http://api.alquran.cloud/v1/search/${term}/all/en.sahih`;
    this.setState({ loading: true });
    const response = await axios.get(url);

    let tmp = [];
    if (response.data.data) {
      response.data.data.matches.forEach(d => {
        let tmpObj = {
          id: d.number,
          text: d.text,
          sura: d.surah.number,
          aya: d.numberInSurah
        };
        tmp.push(tmpObj);
      });

      this.setState({
        count: response.data.data.count,
        verses: tmp,
        term: term,
        loading: false
      });
    } else {
      this.setState({
        count: 0,
        term: term,
        loading: false
      });
    }
  };

  render() {
    let message = null;
    if (this.state.count === 0) {
      message = (
        <p className="termnotfound">
          No Results for {this.state.term}. Try again.{" "}
        </p>
      );
    } else if (this.state.count > 0) {
      message = (
        <DisplayVerses
          count={this.state.count}
          verses={this.state.verses}
          term={this.state.term}
        />
      );
    } else {
      message = null;
    }

    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchVerse onSubmit={this.onFormSubmit} />

        {this.state.loading ? (
          <Spinner text="Wait..I am finding the verses" />
        ) : (
          message
        )}
      </div>
    );
  }
}

export default App;

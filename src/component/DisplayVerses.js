import React from "react";
import "./style.css";

const DisplayVerses = props => {
  let verses = [];
  verses = props.verses.map(({ id, text, sura, aya }) => {
    const link = `https://quran.com/${sura}/${aya}`;
    return (
      <div key={id} className="ui card">
        <div className="content">
          <a
            className="header"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sura}:{aya}
          </a>
          <div className="description">{text}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      We have got
      <span className="termfound"> {props.count} </span>
      results for <span className="termfound"> {props.term} </span>:<p />
      <div className="ui centered cards">{verses}</div>
    </div>
  );
};

export default DisplayVerses;

import React from "react";
import './style.css';

const DisplayVerses = props => {
  let verses = [];
  verses = props.verses.map(({ id, text, sura, aya }) => {
    return (
      <div key={id} className="ui card">
        <div className="content">
          <div className="header">
            {sura}:{aya}
          </div>
          <div className="description">{text}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      We have got
      <span className='termfound'> {props.count} </span>
      results for{" "}
      <span className='termfound'> {props.term} </span>:
      <p></p>
      <div className="ui cards">{verses}</div>
    </div>
  );
};

export default DisplayVerses;

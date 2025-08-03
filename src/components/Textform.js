import React, { useState } from 'react';
import WordCounter from './WordCounter';

export default function Textform(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          id="myBox" 
          value={text} 
          onChange={handleOnchange} 
          rows="8">
        </textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>

      {/* Word counter component */}
      <WordCounter text={text} />
    </>
  );
}

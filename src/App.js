import React, { useState }  from 'react';
import './App.css';

function App() {
  const [storyText, setStoryText] = useState('');
  return (
    <div>
      <div id="tweet-wall">
        <p>{storyText}</p>
      </div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Let me tell you a story..." 
        value={storyText}
        onChange={e => setStoryText(e.target.value)}/>
    </div>
  );
}

export default App;

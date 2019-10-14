import React, { useState }  from 'react';
import './App.css';

function App() {
  const [storyText, setStoryText] = useState('');

  const storyPieced = [];
  let storyPart = '';
  let multipleLines = false;

  for (let i = 0; i < storyText.length; i++){
    if (storyText[i] === '¨'){
      if (multipleLines === false && storyPart.length) {
        storyPieced.push(storyPart)
        storyPart = ''
        multipleLines = true;
      }
    } else {
      multipleLines = false;
      storyPart += storyText[i];
      if (storyPart.length === 280 || i === storyText.length - 1){
        storyPieced.push(storyPart)
        storyPart = ''
      }
    }
  }

  return (
    <div>
      <div id="tweet-wall">
        {storyPieced.map((a, i) => <p key={`${i}_${a}`}>{a}</p>)}
      </div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Let me tell you a story..." 
        value={storyText}
        onChange={e => setStoryText(e.target.value)}/>
      <div id='tweet-lengths'>
        <p>Total number of tweets: {storyPieced.length}</p>
      </div>
    </div>
  );
}

export default App;

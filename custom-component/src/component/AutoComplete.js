import React, { useEffect, useState } from 'react';
import atuoComplete from '../methods/autoComplete.js';
import { words } from '../assets/word';

function AutoComplete() {

  const [wordArr, setWordArr] = useState(words);

  useEffect(() => {
    
    atuoComplete(document.getElementById('search-input'), wordArr);
  });

  return (
    <div>

      <h2>AutoComplete</h2>

      <div id='search-bar'>
        <div className='search-input-container flex'>
          <input id='search-input' type='text' placeholder='Search...' />
          <div className='search-close-btn'>X</div>
        </div>
      </div>
    </div>
  )
}

export default AutoComplete;
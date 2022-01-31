import React, { useState } from 'react';

function Tag() {

  const [tagList, setTagList] = useState(['React', 'Vue']);
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div>
      <h2>Tag</h2>

      <div className = {`tag-container flex  ${inputFocus ? 'tag-border' : null}`}>
        {
          tagList.map((tag, i) => {
            return (
              <div className='tag-unit flex' key={ i }>
                <div className='tag-name'>{ tag }</div>
                <button className='tag-delete' onClick = {(e) => {
                  var copyTagArr = [...tagList];
                  var removedTagArr = copyTagArr.filter((item) => {
                    return item !== tag;
                  })
                  setTagList(removedTagArr);
                }}>X</button>
              </div>
            )
          })
        }
        <input className='tag-input' placeholder='Press Enter to add tags'
          onKeyPress = {(e) => {
            if (e.key === 'Enter') {
              var copyTagArr = [...tagList];
              copyTagArr.push(e.target.value);
              setTagList(copyTagArr);
              e.target.value = '';
            }
          }} 
          onFocus = {() => {setInputFocus(!inputFocus)}}
          onBlur = {() => {setInputFocus(!inputFocus)}} />
      </div>
    </div>
  )
}

export default Tag;
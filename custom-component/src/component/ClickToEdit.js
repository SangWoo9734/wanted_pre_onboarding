import React, { useState } from 'react';

function ClickToEdit() {

  const DEFALUT_NAME = '최해커';
  const DEFAULT_AGE = 20

  const [userName, setUserName] = useState(DEFALUT_NAME);
  const [userAge, setUserAge] = useState(DEFAULT_AGE);
  const [inputName, setInputName] = useState(DEFALUT_NAME);
  const [inputAge, setInputAge] = useState(DEFAULT_AGE);

  return (
    <div>
      <h2>Click To Edit</h2>

      <div className='input-container flex'>
        <div className='input-title'>이름 :</div>
        <input className='input-value' type='text'
          value = { inputName }
          onChange = {(e) => {
            setInputName(e.target.value);
          }}
           onBlur={() => { setUserName(inputName) }}/>
      </div>
      <div className='input-container flex'>
        <div className='input-title'>나이 :</div>
        <input className='input-value' type='text'
          value = { inputAge }
          onChange = {(e) => {
            setInputAge(e.target.value);
          }}
          onBlur={() => { setUserAge(inputAge) }}/>
      </div>

      <div className='input-result'>이름 : { userName } / 나이 : { userAge }</div>
    </div>
  )
}

export default ClickToEdit;
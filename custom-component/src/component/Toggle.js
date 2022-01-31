import React, { useState } from 'react';

function Toggle() {

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h2>Toggle</h2>

      <div className={`toggle-outer flex ${ toggle ? 'toggle-on' : 'toggle-off' }`}>
        <div className={`toggle-inner ${ toggle ? 'toggle-right' : 'toggle-left' }`} onClick = {() => {
          setToggle(!toggle);
        }}></div>
      </div>
      
      <div className='toggle-doc'>Toggle Switch { toggle ? 'ON' : 'OFF' }</div>
    </div>
  )
}


export default Toggle;
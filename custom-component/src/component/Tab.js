import React, { useEffect, useState } from 'react';

function Tab() {

  const [currentTab, setCurrentTab] = useState(1);
  const [currentContent, setCurrentContent] = useState('');


  useEffect(() => {
    if (currentTab === 1) {
      setCurrentContent('ONE');
    } else if (currentTab === 2) {
      setCurrentContent('TWO');
    } else if (currentTab === 3) {
      setCurrentContent('THREE');
    }
  }, [currentTab]);

  return (
    <div>
      <h2>Tab</h2>
      <div className='tab-container flex'>
        <div className='tab-btn-container flex'>
          <div className={`tab-btn flex ${currentTab === 1 ? 'selected' : null}`}
            onClick={() => {setCurrentTab(1)}}>
            <p>Tab1</p>
          </div>
          <div className={`tab-btn flex ${currentTab === 2 ? 'selected' : null}`}
            onClick={() => {setCurrentTab(2)}}>
            <p>Tab2</p>
          </div>
          <div className={`tab-btn flex ${currentTab === 3 ? 'selected' : null}`}
            onClick={() => {setCurrentTab(3)}}>
            <p>Tab3</p>
          </div>
        </div>
        <div className='tab-content flex'>
          <div>Tab menu {currentContent}</div>
        </div>
      </div>
    </div>
  )
}


export default Tab;
import './App.css';
import React, { Component } from 'react';

import Toggle from './component/Toggle'
import Modal from './component/Modal'
import Tab from './component/Tab'
import Tag from './component/Tag'
import AutoComplete from './component/AutoComplete'
import ClickToEdit from './component/ClickToEdit'

import './style/componentStyle.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Toggle />
        <hr />
        <Modal />
        <hr />
        <Tab  />
        <hr />
        <Tag  />
        <hr />
        <AutoComplete />
        <hr />
        <ClickToEdit />
        <hr />
      </div>
    );
  }
}

export default App;

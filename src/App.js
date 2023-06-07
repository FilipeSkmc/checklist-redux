import React, { Component } from 'react'
import './App.css';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <Contacts />
      </main>
    )
  }
}

export default App;

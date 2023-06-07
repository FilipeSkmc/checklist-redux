import React, { Component } from 'react'
import FormContact from './FormContact'
import ContactList from './ContactList';

class Contacts extends Component {
  render() {
    return (
      <div>
        <FormContact />
        <ContactList />
      </div>
    )
  }
}

export default Contacts;
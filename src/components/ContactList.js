import React, { Component } from 'react'
import { connect } from 'react-redux';

class ContactList extends Component {
  render() {
    // recebe como props os contatos do estado global
    const { contacts }  = this.props;

    return (
      <div>
        <h3>Meus contatos</h3>
        {
          contacts.length === 0 ? (
            <p>Nenhum encontrado</p>
          ) : (
            contacts.map(({name, phone}, index) => 
            (
              <div key={index}>
                <p>{`${name} - ${phone}`}</p>
              </div>
            ))
          )
        }
      </div>
    )
  }
}

// cria props para o componente usar com os valores do estado global.
const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

// assina o componente para receber os valores do estado global, e mapeia para props
export default connect(mapStateToProps)(ContactList);
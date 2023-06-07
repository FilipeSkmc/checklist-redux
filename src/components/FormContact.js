import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addContact } from '../redux/actions';

const initial = {
  name: '',
  phone: '',
}

class FormContact extends Component {
  state = initial;

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  }

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(addContact(this.state));
    this.setState(initial)
  }

  render() {
    const { name, phone } = this.state;
    const disabled = !(
      name.length >= 3 && 
      phone.length >= 8
    );

    return (
      <div>
        <h3>Novo Contato</h3>
        <label htmlFor="name">
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={ name }
            onChange={this.handleChange}
            placeholder='Name'
          />
        </label>
        <label htmlFor="phone">
          <input 
            type="text" 
            name="phone" 
            id="phone" 
            maxLength="11"
            value={ phone }
            onChange={this.handleChange}
            placeholder='Phone'
          />
        </label>
        <button 
          type="submit"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Adicionar
        </button>
        <hr />
      </div>
    )
  }
}

// conecta o componente para usar o dispatch, mas não está usando nenhum valor do estado global
export default connect()(FormContact);
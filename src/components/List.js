import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.css';

export default class List extends Component {
  constructor(){
    super()
    this.state = {
      filterText : ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  static propTypes = {
    contacts : PropTypes.array.isRequired
  };

  handleChange(e){
    console.log(e.target.value)
    this.setState({
      filterText: e.target.value
    })
  }
  render() {
    const filteredContacts = this.props.contacts.filter(contact => {
      return contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1;
    });
    return (
      <div className="list">
        <input name="filter" id="filter" value={this.state.filterText} onChange={this.handleChange} placeholder="Filter by name or phone" />
        <ul>
          {
            filteredContacts.map(person => {
              return (
                <li key={person.id}>{person.name} <span>{person.phone}</span></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

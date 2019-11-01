import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
  constructor(){
    super();
    this.state = {
      name : '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static propTypes = {
    addContact : PropTypes.func
  };

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addContact({...this.state});
    this.setState({
      name : '',
      phone : ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter a name" />
          <input name="phone" id="phone"value={this.state.phone} onChange={this.handleChange} placeholder="Enter a phone number" />
          <button>ADD PHONE NUMBER</button>
        </form>
      </div>
    )
  }
}

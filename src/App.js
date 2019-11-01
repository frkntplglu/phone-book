import React, {Component} from 'react';
import './App.css';
import Contacts from './components/Contacts'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts : [
        {
          id : 1,
          name : 'Furkan',
          phone : '0543 336 97 60'
        },
        {
          id : 2,
          name : 'Emir',
          phone : '0523 336 97 60'
        },
        {
          id : 3,
          name : 'Gaye',
          phone : '0533 336 97 60'
        },
        {
          id : 4,
          name : 'Ahmet',
          phone : '0543 336 97 60'
        },
        {
          id : 5,
          name : 'Hasan',
          phone : '0523 336 97 60'
        },
        {
          id : 6,
          name : 'Hüseyin',
          phone : '0533 336 97 60'
        }
      ]
    }

    this.addContact = this.addContact.bind(this)
  };

  addContact(contact){
    const  {contacts} = this.state;
    contacts.push(contact)
    this.setState({
      contacts: contacts
    });
  }
  
  render(){
    return (
      <div className="App">
        <div className="container">
          <Contacts addContact={this.addContact} contacts={this.state.contacts} />
        </div>
        
      </div>
    );
  }
}


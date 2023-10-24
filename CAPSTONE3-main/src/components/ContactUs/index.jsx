import React, { Component } from 'react';
import './style.css';
import Navbar from '../Navbar';

class ContactUsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;


    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

  
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              required
            ></textarea>
          </div>
          <button id='contactbutton' type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactUsForm;

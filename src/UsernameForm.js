// ./src/UsernameForm.js

import React, { Component } from 'react'
import { TextInput } from 'react-desktop/macOs'
import { Button } from 'react-desktop/macOs'



class UsernameForm extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state.username)
  }

  handleChange = e => {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
     
      <div id="username-form">
        <div id="register-login-card">
          <div id="register-container">
            <div id="welcome-description">
              <label>Welcome</label>
              <p>Stardust is an application that will
                allow users to communicate with their friends
                in a single chat room. In additio, Stardust will encourage 
                users to encounter new people, make new friends, and create 
                new additional chat rooms. Sign up now and instantly
                enjoy all Stardust has to offer. Bye :) 
              </p>
              <div id="register-button">Register</div>
            </div>
            <div id="register-form"></div>
          </div>
          <div id="login-container">
            <form id="login-form">
              <div id="login-logo"></div>
              <input class="login-fields" placeholder="Email"></input>
              <input class="login-fields" placeholder="Password"></input>
              <button id="login-button">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default UsernameForm
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
            <form id="register-form">
              <label>Welcome</label>
              <input class="register-fields" placeholder="Username"></input>
              <input class="register-fields" placeholder="Email"></input>
              <input class="register-fields" placeholder="Password"></input>
              <div id="register-button">Register</div>
            </form>
          </div>
          <div id="login-container">
            <form id="login-form">
              <div id="login-logo"></div>
              <label id="logo-name">S T A R D U S T</label>
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
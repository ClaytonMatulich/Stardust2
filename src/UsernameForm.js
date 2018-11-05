// ./src/UsernameForm.js

import React, { Component } from 'react'
import { TextInput } from 'react-desktop/macOs'
import { Button } from 'react-desktop/macOs'
import fire from './firebase'
import { checkServerIdentity } from 'tls';
import { __await } from 'tslib';



class UsernameForm extends Component {
  constructor() {
    fire.database().ref();
    super()
    this.state = {
      email: '',
      password: '',
      username: 'clayton',
      firebase: false
    }
  }

  

  handleSubmit = e => {
    var test = 3;

    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function () {
      //alert("SUCCESS!!!");
      //this.props.handleSubmit(this.state.username);
      
    }).catch(function (error) {
        if (error != null) {
            alert(error.message);
            return;
        }
      });

    
    // if (this.state.password !== '' || this.state.password !== '' ) {
    //   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     if (errorCode === 'auth/wrong-password') {
    //       alert('Wrong password.');
    //     } else {
    //       alert(errorMessage);
    //     }
    //     // ...
    //   });
    // }

  }


  handleChangeEmail = e => {
    this.setState({ email: e.target.value })
  }

  handleChangePassword = e => {
    this.setState({ password: e.target.value })
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
            <form onSubmit={this.handleSubmit} id="login-form">
              <div id="login-logo"></div>
              <label id="logo-name">S T A R D U S T</label>
              <input class="login-fields" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email"></input>
              <input type="password" class="login-fields" value={this.state.password} onChange={this.handleChangePassword} placeholder="Password"></input>
              <button id="login-button" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>

      
    )
  }
}

export default UsernameForm
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
      <div className="username-form">
        <form onSubmit={this.handleSubmit} id='loginForm'>

          <div id='titleWrapper'>
            <label id = "title" > Stardust </label>
          </div>

          <div id = "inputFieldWrapper">
            <input 
              id="inputField"
              type = "text"
              label="Username:"
              placeholder="     For example, @l337H4ck0rzz"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div id = "submitButtonWrapper">
            {/* <Button color="blue" type="submit">
              Submit
            </Button> */}

            <input id="submitButton" type = "submit" >
            
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default UsernameForm
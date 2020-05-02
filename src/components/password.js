import React, { Component } from "react";

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      errorMessage: "",
    };
  }

  onTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = () => {
    let email = this.state.email;
    let pass = this.state.pass;
    let specialChar = "@!*#*?/&$§";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alpCapital = alphabet.toUpperCase();
    let numbers = "123456789";

    if (email === "") {
      this.setState({
        errorMessage: "Please Enter a name",
      });
      return;
    }

    if (!email.includes("@")) {
      this.setState({
        errorMessage: "Please Enter a valid email",
      });
      return;
    }

    if (pass.length < 8) {
      this.setState({
        errorMessage: "at least 8 letters",
      });
      return;
    }

    if (pass.includes(email)) {
      this.setState({
        errorMessage: "username cannot be included!",
      });
      return;
    }

    const capitalChars = Array.from(pass).filter((item) => {
      return alpCapital.indexOf(item) !== -1;
    });

    if (capitalChars.length === 0) {
      this.setState({
        errorMessage: "enter at least one Capital letter!",
      });
      return;
    }

    let specialCharacter = Array.from(pass).filter((item) => {
      return specialChar.indexOf(item) !== -1;
    });
    if (specialCharacter.length === 0) {
      this.setState({
        errorMessage: "enter at least one special Char!",
      });
      return;
    }
    let numberContainer = Array.from(pass).filter((item) => {
      return numbers.indexOf(item) !== -1;
    });
    if (numberContainer.length === 0) {
      this.setState({
        errorMessage: "enter at least one Number!",
      });
      return;
    }

    this.setState({
      errorMessage: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <div>User Name</div>
        <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.onTextChange}
        />
        <div>Password</div>
        <input
          name="pass"
          type="text"
          value={this.state.pass}
          onChange={this.onTextChange}
        />
        <br />
        <div>{this.state.errorMessage}</div>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

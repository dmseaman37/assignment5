import React from 'react';
import './App.css';
import PasswordVerify from './PasswordVerify';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return(
      <div>
        <h1>Basic password verifier</h1>
        <input value={this.state.text} onChange={this.handleChange} />

        <PasswordVerify min={8} text={this.state.text}>
          {
            (needUpperCase, needLowerCase, needNumber, tooShort) => {

              let upperCase = 'At least one upper case letter required'; //Type password requirements here
              let lowerCase = 'At least one lower case letter required';
              let number = 'At least one number required';
              let length = 'At least 8 characters required';

              return (
                <div>
                  <div>
                    <p className={needUpperCase ? "danger" : "success"}>{upperCase}</p>
                    <p className={needLowerCase ? "danger" : "success"}>{lowerCase}</p>
                    <p className={needNumber ? "danger" : "success"}>{number}</p>
                    <p className={tooShort ? "danger" : "success"}>{length}</p>
                  </div>

                  <div>
                    <p>
                      This reusable component checks if the string in the
                      input field is a strong password. To use this component,
                      the consumer feeds it a minimum length for the password,
                      and the component will check the password in the input field for
                      upper case letters, lower case letters, digits, and the specified
                      minimum length. The consumer may customize the error
                      messages which correspond to each missing criteria for
                      the password.
                    </p>

                    <p>
                      This component goes a step beyond the RemainingCharacters
                      component that we created in class, and is fairly practical
                      for websites that require users to create an account.
                      This component is appropriately named PasswordVerify, since
                      developers would likely use it to ensure that users on their
                      site do not create weak passwords.
                    </p>

                  </div>
                </div>
              )
            }
          }
        </PasswordVerify>
      </div>
    )
  }
}

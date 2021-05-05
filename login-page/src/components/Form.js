import React, { Component } from 'react';
import '../index.css'

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;

            case 'password':
                passwordValid: value.match(value.length >= 6);
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;

            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    handleUserInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value)});
    }

    render() {
        return (
            <div>
                <form className="signinForm">
                    <h2>Sign up</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="enter email" 
                            name="email" 
                            value={this.state.email}
                            onChange={(event) => this.handleUserInput(event)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="enter password" 
                            name="password" 
                            value={this.state.password}
                            onChange={(event) => this.handleUserInput(event)}
                        />
                    </div>
                    <button type="submit" className="submit-button"> Sign up </button>
                </form>
            </div>
        )
    }
}

export default Form

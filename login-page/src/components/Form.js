import React, { Component } from 'react';
import '../index.css'

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            
        }
    }

    handleUserInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    render() {
        return (
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
        )
    }
}

export default Form

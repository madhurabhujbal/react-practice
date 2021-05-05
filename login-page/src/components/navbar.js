import React from 'react'
import { Navbar,Nav,Form,Button } from 'react-bootstrap'
import logo from '../images/AND-small-logo.png'

function navbar() {
    return (
        <div>
            <Navbar className="navbar">
                <Navbar.Brand>
                    <img className="logo" src= {logo} alt="AND logo"></img>
                </Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <Button>Signin</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default navbar

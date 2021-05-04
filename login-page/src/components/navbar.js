import React from 'react'
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
import logo from '../images/AND-small-logo.png'

function navbar() {
    return (
        <div>
            <Navbar className="navbar">
                <Navbar.Brand>
                    <img className="logo" src= {logo} alt="AND logo"></img>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button>Signin</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default navbar

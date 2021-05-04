import React, { Component } from 'react';
import Form from './components/Form';
import './index.css';
import Navbar from './components/navbar';

class App extends Component {
  render() {
      return (
        <div className="App">
          <Navbar />
          <Form />
        </div>
      );
    }
  }

export default App;

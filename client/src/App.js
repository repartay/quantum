import React, { Component } from 'react';
import ControlledForm from './form/ControlledForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="app-header">Search For Sessions</header>
        <div className="form-wrapper"><ControlledForm /></div>
      </div>
    );
  }
}

export default App;


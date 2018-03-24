import React from 'react';
import axios from 'axios';
// import Select from 'react-select';

class FormBase extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const res = axios.get(`/api/session`, {
      body: data,
    });
    console.log('result!', res);
  }
  render() {
    let row = 0;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="predicate">Enter Predicate</label>
        <input id="predicate" name={`${row}.predicate`} type="text" />
        <label htmlFor="filter">Filter</label>
        <input id="filter" name={`${row}.filter`} type="text" />
        <label htmlFor="textInput">Enter text to search for</label>
        <input id="textInput" name="textInput" type="text" />
        <button>Send data!</button>
      </form>
    );
  }
}

export default FormBase;  
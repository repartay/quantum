import React from 'react';
import Select from 'react-select';
import { inputConfig } from '../schemas';

class ControlledForm extends React.Component {
  constructor() {
    super();
    this.state = {
      queries: [{ predicate: '', filter: '', text: ''}]
    };
  }
  handlePredicateChange = (idx) => (evt) => {
    const newQuery = this.state.queries.map((query, qidx) => {
      if (idx !== qidx) return query;
      return { ...query, predicate: evt };
    });
    this.setState({ queries: newQuery });
    console.log(`NewQuery: ${newQuery}`);
  }
  handleFilterChange = (idx) => (evt) => {
    const newQuery = this.state.queries.map((query, qidx) => {
      if (idx !== qidx) return query;
      return { ...query, filter: evt.target.value };
    });
    this.setState({ queries: newQuery });
  }
  handleTextChange = (idx) => (evt) => {
    const newQuery = this.state.queries.map((query, qidx) => {
      if (idx !== qidx) return query;
      return { ...query, text: evt.target.value };
    });
    this.setState({ queries: newQuery });
  }
  
  handleAddQuery = () => {
    this.setState({
      queries: this.state.queries.concat([{ predicate: '', filter: '', text: '' }])
    });
  }
  handleRemoveQuery = (idx) => () => {
    this.setState({
      queries: this.state.queries.filter((q, qidx) => idx !== qidx)
    });
  }
  handleSubmit = (evt) => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.queries.map((query, idx) => (
          <div key={idx} className="query">
            <Select
              name="predicate-field"
              value={query.predicate}
              onChange={this.handlePredicateChange(idx)}
              options={inputConfig }
            />
            <input
              type="text"
              placeholder={`Query Filter #${idx + 1}`}
              value={query.filter}
              onChange={this.handleFilterChange(idx)}
            />
            <input
              type="text"
              placeholder={`Query Text #${idx + 1}`}
              value={query.text}
              onChange={this.handleTextChange(idx)}
            />
            <button type="button" onClick={this.handleRemoveQuery(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddQuery} className="small">Add</button>
        <button>Submit</button>
      </form>
    )
  }
}

export default ControlledForm;

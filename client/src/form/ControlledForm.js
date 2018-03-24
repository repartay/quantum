import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { inputPredConfig, inputFilterConfig } from '../schemas';
import './ControlledForm.css';

class ControlledForm extends React.Component {
  constructor() {
    super();
    this.state = {
      queries: [{ predicate: '', filter: '', text: ''}],
      currentFilter: inputFilterConfig,
      currentPredicates: inputPredConfig
    };
  }
  getFilteredFList = (type) => {
    const cleanFilterList = inputFilterConfig.filter(f => f.type === type);
    this.setState({ currentFilter: cleanFilterList});
  }
  getFilteredPList = (type) => {
    const cleanPredicatesList = inputPredConfig.filter(f => f.type === type);
    this.setState({ currentPredicates: cleanPredicatesList});
  }
  handlePredicateChange = (idx) => (evt) => {
    if (evt !== null) this.getFilteredFList(evt.type);
    const newQuery = this.state.queries.map((query, qidx) => {
      if (idx !== qidx) return query;
      return { ...query, predicate: evt };
    });
    this.setState({ queries: newQuery });
  }
  handleFilterChange = (idx) => (evt) => {
    if (evt !== null) this.getFilteredPList(evt.type);
    const newQuery = this.state.queries.map((query, qidx) => {
      if (idx !== qidx) return query;
      return { ...query, filter: evt };
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
          <div key={idx} className="row-wrapper">
            {idx !== 0 && <button type="button" onClick={this.handleRemoveQuery(idx)} className="small">-</button>}
            <div className="col select-wrapper">
              <Select
                placeholder="Select Predicate"
                name="predicate-field"
                value={query.predicate}
                onChange={this.handlePredicateChange(idx)}
                options={this.state.currentPredicates}
              />
            </div>
            <div className="col select-wrapper">
              <Select
                placeholder="Select Filter"
                name="filter-field"
                value={query.filter}
                onChange={this.handleFilterChange(idx)}
                options={this.state.currentFilter}
              />

            </div>
            <input
              type="text"
              placeholder={`Query Text #${idx + 1}`}
              value={query.text}
              onChange={this.handleTextChange(idx)}
            />
          </div>
        ))}
        <button type="button" onClick={this.handleAddQuery} className="small">Add</button>
        <button>Submit</button>
      </form>
    )
  }
}

export default ControlledForm;

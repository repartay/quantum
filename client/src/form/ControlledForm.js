import _ from 'lodash';
import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import 'react-select/dist/react-select.css';
import { inputPredConfig, inputFilterConfig } from '../schemas';
import './ControlledForm.css';

class ControlledForm extends React.Component {
  constructor() {
    super();
    this.state = {
      queries: [{ 
        predicate: '', 
        filter: '', 
        text: '',
        text2: '',
        predicateList: inputPredConfig,
        filterList: inputFilterConfig,
        showRangeInputs: false
      }]
    };
  }
  handlePredicateChange = (idx) => (evt) => {
    const newQuery = this.state.queries.map((query, qidx) => {
      if (idx !== qidx) return query;
      if (evt !== null) {
        const cleanFilterList = inputFilterConfig.filter(f => f.type === evt.type);
        return { ...query, predicate: evt, filterList: cleanFilterList};
      }
      return { ...query, predicate: evt, filterList: inputFilterConfig};
    });
    this.setState({ queries: newQuery });
  }
  handleFilterChange = (idx) => (evt) => {
    const newQuery = this.state.queries.map((query, qidx) => {
      if (idx !== qidx) return query;
      if (evt !== null) {
        let rangeFieldVal = query.showRangeInputs;
        if (evt.value === 'range') rangeFieldVal = true;
        const cleanPredicatesList = inputPredConfig.filter(f => f.type === evt.type);
        return { 
          ...query,
          filter: evt,
          predicateList: cleanPredicatesList,
          showRangeInputs: rangeFieldVal
        };
      }
      return { ...query, filter: evt, predicateList: inputPredConfig };
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
  handleText2Change = (idx) => (evt) => {
    const newQuery = this.state.queries.map((query, qidx) => {
      if (idx !== qidx) return query;
      return { ...query, text2: evt.target.value };
    });
    this.setState({ queries: newQuery });
  }
  handleAddQuery = () => {
    this.setState({
      queries: this.state.queries.concat([{ 
        predicate: '',
        filter: '',
        text: '',
        predicateList: inputPredConfig,
        filterList: inputFilterConfig,
        showRangeInputs: false
      }])
    });
  }
  handleRemoveQuery = (idx) => () => {
    this.setState({
      queries: this.state.queries.filter((q, qidx) => idx !== qidx)
    });
  }
  handleSubmit = (evt) => {
    const { queries } = this.state;
    const cleanQueries = queries.map(query => _.omit(query, ['filterList', 'predicateList', 'showRangeInputs'] ))
    console.log('cleanQueries', cleanQueries);
    const jsoned = JSON.stringify(cleanQueries);
    console.log('jsoned', jsoned);
    // const res = axios.get('/api/session', cleanQueries); JSON.stringify(cleanQueries)
    axios.post('/api/session', {
      headers : {
        'Content-Type' : 'application/json'
      },
      data: jsoned
    })
    .then(function (response) {
      console.log('res===', response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    console.log(this.state.queries, 'this.state.quieries');
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.queries.map((query, idx) => (
          <div key={idx} className="row-wrapper">
            <button type="button" 
              className="rm-btn"
              disabled={idx !==0 ? false : true }
              onClick={this.handleRemoveQuery(idx)} 
            >-</button>
            <div className="col select-wrapper">
              <Select
                placeholder="Select Predicate"
                name="predicate-field"
                value={query.predicate}
                onChange={this.handlePredicateChange(idx)}
                options={query.predicateList}
              />
            </div>
            {query.showRangeInputs && <button type="button" disabled className="txt-btn">is</button>}
            <div className="col select-wrapper">
              <Select
                placeholder="Select Filter"
                name="filter-field"
                value={query.filter}
                onChange={this.handleFilterChange(idx)}
                options={query.filterList}
              />
            </div>
            {query.showRangeInputs ? (
              <div>
                <input
                  className="col range-wrapper"
                  type="text"
                  placeholder="min"
                  value={query.text}
                  onChange={this.handleTextChange(idx)}
                />
                <button type="button" disabled className="col pretend-btn">and</button>
                <input
                  type="text"
                  className="col range-wrapper "
                  placeholder="max"
                  value={query.text2}
                  onChange={this.handleText2Change(idx)}
                />
              </div>
            ) : (
              <div className="col">
                <input
                  type="text"
                  className="input-wrapper"
                  placeholder={`Query Text #${idx + 1}`}
                  value={query.text}
                  onChange={this.handleTextChange(idx)}
                />
              </div>
            )}
          </div>
        ))}
        <div className="row-wrapper">
          <button type="button" onClick={this.handleAddQuery} className="add-btn">And</button>
        </div>
        <div className="bottom-row">
          <button type="button" className="submit-btn" onClick={this.handleSubmit}>Search</button>
        </div>
      </form>
    )
  }
}

export default ControlledForm;

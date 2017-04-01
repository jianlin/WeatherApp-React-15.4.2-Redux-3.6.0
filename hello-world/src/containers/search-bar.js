import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";


class SearchBar extends Component {

  constructor(props) {
    console.log("Inside SearchBar constructor");
    super(props);
    this.state = { term: "" }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(event) {
    console.log("In handleInputChange", event.target.value, event.currentTarget, event.target);
    this.setState({ term: event.target.value })
  }

  handleFormSubmit(event) {
    console.log("In handleSubmit", event);
    //debugger;
    event.preventDefault();
    //this.setState({ term: event.target.value })
    this.props.fetchWeather(this.state.term);   // the action creator is part of props now. Note that we use the state, not the input field to get the value, because we use the state as the central location for data, and this is a controlled field
    this.setState({ term: "" })
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.handleFormSubmit}>
      <input
        className="form-control"
        placeholder="Search for 5 day weather forecast for a city..."
        value={this.state.term}
        onChange={this.handleInputChange}
      />
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="submit">Search</button>
        </span>
      </form>
    );

  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

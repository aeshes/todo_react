import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      term: "", // to store what we passing as a value to our input
      items: [] // store every value which we passing to our todo list
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;

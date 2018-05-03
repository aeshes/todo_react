import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";

class TodoForm extends Component {
  constructor(props) {
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
    let todos = this.state.items.map((item) => ({ text: item, done: false}));
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <ul>
            <TodoList items={todos} />
        </ul>
      </div>
    );
  }
}

export default TodoForm;

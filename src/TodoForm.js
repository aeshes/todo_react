import React, { Component } from 'react';
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
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    
  }

  onSubmit(event) {
    
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

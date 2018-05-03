import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { text: 'ListItem-1', done: false },
                { text: 'ListItem-2', done: false },
                { text: 'ListItem-3', done: false },
                { text: 'ListItem-4', done: false }
            ]
        };
    }

    render() {
        return this.state.items.map((item, i) => (
            <TodoItem key={i} {...item} />
        ));
    }
};

export default TodoList;
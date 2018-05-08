import React from "react";

const TodoItem = ({ text, done }) => (
    <div className="todo-view">
        <input type="checkbox" className="todo-checkbox" />
        <span className="todo-content" tabIndex="0">{text}</span>
        <span className="todo-remove-icon"></span>
    </div>
);

export default TodoItem;
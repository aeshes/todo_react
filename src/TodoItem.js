import React from "react";

const TodoItem = ({ text, done }) => (
    <li className={ done ? "done" : "" }>
        <span>{ text }</span>
        <span className="close">{"\u00D7"}</span>
    </li>
);

export default TodoItem;
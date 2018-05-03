import React from "react";

const Todo = props => {
    return (
        <li>
            {props.item}
            <span className="close">{"\u00D7"}</span>
        </li>
    );
};

export default Todo;
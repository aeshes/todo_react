import React from "react";
import Todo from "./Todo";
import TodoItem from "./TodoItem";

const List = props => {
    return (
    <ul>
        {
            props.items.map((item, index) => <TodoItem item={item} />)
        }
    </ul>);
};

export default List;
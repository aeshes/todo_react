import React from "react";
import Todo from "./Todo";

const List = props => {
    return (
    <ul>
        {
            props.items.map((item, index) => <Todo item={item} />)
        }
    </ul>);
};

export default List;
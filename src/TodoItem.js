import React from "react";

class TodoItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { text: props.item, done: false };
    }

    render()
    {
        let style = this.state.done ? "done" : "";
        return (
            <li onClick={this.handleComplete} className={style}>
                {this.state.text}
                <span className="close" onClick={this.handleRemove}>{"\u00D7"}</span>
            </li>
        );
    }

    handleComplete = () =>
    {
        this.setState({ done: !this.state.done });
    }

    handleRemove = () =>
    {
        alert("remove");
    }
};

export default TodoItem;
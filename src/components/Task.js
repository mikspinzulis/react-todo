import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="Task">
                <span style={{ textDecoration: this.props.todo.done ? 'line-through' :
                'none'}}>
                    {this.props.todo.value}
                    </span>
                <button onClick={() => this.props.handleClick(this.props.index)}>{this.props.todo.done ? '' : ''}<i
                    className="fa fa-check"></i></button>
            </div>
        )
    }
}
export default Task;

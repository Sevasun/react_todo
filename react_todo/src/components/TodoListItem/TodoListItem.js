import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'red' : 'black',
        fontWeight: important ? 700 : 400
    };
    return (
        <span className="todo-list-item">
            <span 
                style={style}
                className="todo-list-item-label">
                { label }
            </span>

            <button 
                type="button"
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"></i>
            </button>
            <button 
                type="button"
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"></i>
            </button>
        </span>
    );
};

export default TodoListItem;
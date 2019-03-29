import React, {Component} from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
    render() {
        const { label, 
                onDeleted, 
                onToggleImportant, 
                onToggleDone,
                done,
                important } = this.props;

        let classNames = 'todo-list-item';

        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }

        return (
            <span className="todo-list-item">
                <span 
                    onClick={ onToggleDone }
                    className={ classNames }>
                    { label }
                </span>
    
                <button 
                    type="button"
                    onClick={ onToggleImportant }
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"></i>
                </button>
                <button 
                    type="button"
                    onClick = {onDeleted}
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        );
    }
}
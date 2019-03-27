import React, {Component} from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {

    constructor() {
        super();
        this.onLabelClick = () => {
            this.setState(({ done }) => {
                return {
                    done: !done
                }
            });
        };
        this.onMarkImportant = () => {
            this.setState(({ important }) => {
                return {
                    important: !important
                }
            });
        };

        this.state = {
            done: false,
            important: false
        };
    }

    render() {
        const {label, onDeleted} = this.props;
        const { done, important } = this.state;

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
                    onClick={ this.onLabelClick }
                    className={ classNames }>
                    { label }
                </span>
    
                <button 
                    type="button"
                    onClick={this.onMarkImportant}
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
import React from 'react';

import TodoListItem from '../TodoListItem/';
import './TodoList.css';


export default class TodoList extends React.Component {
    render() {
        const { todos, onDeleted, onToggleProperty } = this.props;
        const elements = todos.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem 
                        {...itemProps}
                        onToggleImportant = { onToggleProperty.bind(null, id, 'important') }
                        onToggleDone = { onToggleProperty.bind(null, id, 'done') }
                        onDeleted = { onDeleted.bind(null, id)} />
                </li>
            );
        });

        return (
            <ul className="todo-list list-group">
                { elements }
            </ul>
        );
    }
}
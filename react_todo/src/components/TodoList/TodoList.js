import React from 'react';

import TodoListItem from '../TodoListItem/';
import './TodoList.css';


export default class TodoList extends React.Component {
    render() {
        const { todos, onDeleted } = this.props;
        const elements = todos.map((item) => {
            const { id, ...itemProps } = item;
            return (<li key={id} className="list-group-item">
                <TodoListItem 
                    {...itemProps}
                    onDeleted = {() => onDeleted(id)} />
            </li>);
        });

        return (
            <ul className="todo-list list-group">
                { elements }
            </ul>
        );
    }
}
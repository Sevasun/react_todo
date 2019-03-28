import React from 'react';

import TodoList from '../TodoList/';
import AppHeader from '../AppHeader/';
import SearchPanel from '../SearchPanel/';
import ItemStatusFilter from '../ItemStatusFilter/';
import ItemAddForm from '../ItemAddForm/';
import './app.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.deleteItem = (id) => {
            this.setState(({todoData}) => {
                const idx = todoData.findIndex((el) => el.id === id);
                const newData = [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ];
                return {
                    todoData: newData
                };
            });
        };
        this.addItem = (text) => {            
            this.setState(({ todoData }) => {
                const newItem = {
                    label: text,
                    important: false,
                    id: this.state.todoData.length + 1
                };
                const newData = [...todoData, newItem];

                return {
                    todoData: newData
                }
            })
        }
        this.state = {
            todoData: [
                {label: 'Drink Coffee', important: false, id: 1},
                {label: 'Learn React', important: true, id: 2},
                {label: 'Drunk', important: false, id: 3}
            ]
        };
    }
    
    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem } />
                <ItemAddForm 
                    onItemAdded = { this.addItem }/>
            </div>
        );
    }
}
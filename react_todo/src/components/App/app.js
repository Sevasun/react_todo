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

        this.maxId = 100;

        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee!'),
                this.createTodoItem('Learn React'),
                this.createTodoItem('Drunk')
            ]
        };
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    };

    deleteItem = (id) => {
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

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newData = [...todoData, newItem];

            return {
                todoData: newData
            }
        })
    };

    // onToggleProperty = (array, id, propName) => {
    //     const idx = todoData.findIndex((el) => el.id === id);

    //     const oldItem = todoData[idx];
    //     const newItem = {...oldItem, important: !oldItem.important};

    //     const newData = [
    //         ...todoData.slice(0, idx),
    //         newItem,
    //         ...todoData.slice(idx + 1)
    //     ];

    //     return {
    //         todoData: newData
    //     };
    // };

    onToggleProperty = (id, propName) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};

            const newData = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newData
            };
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important};

            const newData = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newData
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newData = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newData
            }
        });
    };
    
    render() {

        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={this.state.todoData}
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleProperty }
                    onDeleted={ this.deleteItem } />
                <ItemAddForm 
                    onItemAdded = { this.addItem }/>
            </div>
        );
    }
}
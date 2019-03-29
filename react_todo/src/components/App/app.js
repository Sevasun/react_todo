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
            ],
            currentState: [],
            filterData: []
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

    onToggleProperty = (id, propName = 'done') => {
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
    };

    onSearch = (value) => {
        console.log(value);
    }
    
    render() {

        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        // this.setState(({ currentState, todoData }) => {
        //     currentState: [...todoData]
        //     return {
        //         currentState: [...todoData]
        //     }
        // });

        return (
            <div className="todo-app">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel 
                        onSearch={ this.onSearch } />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={this.state.todoData}
                    onToggleProperty={ this.onToggleProperty }
                    onDeleted={ this.deleteItem } />
                <ItemAddForm 
                    onItemAdded = { this.addItem }/>
            </div>
        );
    }
}
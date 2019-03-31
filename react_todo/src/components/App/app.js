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
            filterButtons: [
                this.createFilterButton('All', 'all'),
                this.createFilterButton('Active', 'active'),
                this.createFilterButton('Done', 'done')
            ],
            term: '',
            filterRule: 'all'
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

        if(text) {
            this.setState(({ todoData }) => {
                const newData = [...todoData, newItem];
    
                return {
                    todoData: newData
                }
            });
        };
    };

    createFilterButton(text, rule) {
        return {
            text,
            rule
        }
    }

    filterSearch = (items, term) => {
        if(term === '') {
            return items;
        }

        const newData = items.filter((el) => {
            return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });

        return newData;
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
        this.setState({ 
            term: value
        });
    };

    onFilterStatus = (propName) => {
        this.setState({
            filterRule: propName
        });
    };

    filterSwitch = (propName, list) => {
        switch (propName) {
            case 'active':
                return list.filter((el) => !el.done);
            case 'done':
                return list.filter((el) => el.done);
            default:
                return list;
        };
    }
    
    render() {
        const { todoData, term, filterRule, filterButtons } = this.state;

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        let visibleItems = this.filterSwitch(filterRule, this.filterSearch(todoData, term));

        return (
            <div className="todo-app">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel 
                        onSearch={ this.onSearch } />
                    <ItemStatusFilter
                        currentRule={ filterRule }
                        buttons={ filterButtons }
                        onFilterStatus={ this.onFilterStatus } />
                </div>
                <TodoList 
                    todos={visibleItems}
                    onToggleProperty={ this.onToggleProperty }
                    onDeleted={ this.deleteItem } />
                <ItemAddForm 
                    onItemAdded = { this.addItem }/>
            </div>
        );
    }
}
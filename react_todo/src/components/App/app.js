import React from 'react';

import TodoList from '../TodoList/';
import AppHeader from '../AppHeader/';
import SearchPanel from '../SearchPanel/';
import ItemStatusFilter from '../ItemStatusFilter/';
import './app.css';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Learn React', important: true, id: 2},
        {label: 'Drunk', important: false, id: 3}
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};

export default App;
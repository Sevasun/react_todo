import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul className="todo-list">
            <li>Learn React</li>
            <li>Drink Coffee</li>
        </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>Todo list</h1>
    );
};

const SearchPanel = () => {
    return <input type="search" placeholder="Search" />;
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

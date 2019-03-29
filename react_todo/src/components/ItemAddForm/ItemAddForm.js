import React from 'react';

import './ItemAddForm.css';


export default class ItemAddForm extends React.Component {
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        const value = e.target.value;
        this.setState({label: value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form 
                className="item-add-form d-flex"
                onSubmit={this.onSubmit} >
                <input type="text" 
                    className="form-control"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                    placeholder="Add task" />
                <button
                    className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        );
    };
};
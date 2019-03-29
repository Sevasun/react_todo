import React from 'react';

import './SearchPanel.css';

export default class SearchPanel extends React.Component {
    
    render() {
        const { onSearch } = this.props;

        return (<input 
            type="search" 
            onChange={ (e) => onSearch(e.target.value) }
            className="form-control search-input"
            placeholder="Search" />
        );
    }
};
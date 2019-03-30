import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
	render() {
		const { onFilterStatus } = this.props;

		return ( 
			<div className="btn-group" >
				<button type="button"
					onClick={ onFilterStatus.bind(null, 'all') }
					className="btn btn-info" > 
					All 
				</button>
				<button type="button"
					onClick={ onFilterStatus.bind(null, 'active') }
					className="btn btn-outline-secondary" >
					Active
				</button>
				<button type="button"
					onClick={ onFilterStatus.bind(null, 'done') }
					className="btn btn-outline-secondary" >
					Done
				</button>
			</div>
		);
	}
}
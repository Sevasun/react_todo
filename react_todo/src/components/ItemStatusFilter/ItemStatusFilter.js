import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
	render() {
		const { onFilterStatus, buttons, currentRule } = this.props;

		const btn = buttons.map((item) => {
			const { text, rule } = item;
			let classNames = 'btn ';

			if(rule === currentRule) {
				classNames += "btn-info";
			} else {
				classNames += "btn-outline-secondary";
			}

			return (
				<button
					key={rule}
					className={ classNames }
					onClick={ onFilterStatus.bind(null, rule) }>
					{text}
				</button>
			);
		});

		return ( 
			<div className="btn-group" >
				{ btn }
			</div>
		);
	}
}
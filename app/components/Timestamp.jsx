'use strict';

import React from 'react';
import { connectToStores } from 'fluxible/addons';
import updateTime from '../actions/updateTime';
import TimeStore from '../stores/TimeStore';

class Timestamp extends React.Component {

	static propTypes = {
		time: React.PropTypes.string
	}

	constructor( props ) {
		super( props );
		this.onReset = this.onReset.bind( this );
	}

	static contextTypes = {
		executeAction: React.PropTypes.func.isRequired
	}

	onReset( e ) {
		this.context.executeAction( updateTime );
	}

	render() {
		return (
			<div style={{paddingTop: 10}}>
				<em onClick={this.onReset} style={{fontSize: '.8em'}}>{this.props.time}</em>
			</div>
		);
	}
}

Timestamp = connectToStores(
	Timestamp,
	[ TimeStore ],
	(stores, props ) => {
		return stores.TimeStore.getState();
	}
);

module.exports = Timestamp;

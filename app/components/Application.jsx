'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import { provideContext, connectToStores } from 'fluxible/addons';
import Nav from './Nav';
import Timestamp from './Timestamp';

class Application extends React.Component {

	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div>
				<Nav />
				<RouteHandler />
				<Timestamp />
			</div>
		);
	}
}

Application = provideContext( Application );

module.exports = Application;

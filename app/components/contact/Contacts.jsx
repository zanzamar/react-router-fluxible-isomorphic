'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';

class Contacts extends React.Component {
	render() {
		return (
			<div>
				<h1>Contact Page</h1>
				<RouteHandler {...this.props} />
			</div>
		);
	}
}

module.exports = Contacts;

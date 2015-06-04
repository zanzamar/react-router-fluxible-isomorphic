'use strict';

import React from 'react';
import { Link, RouteHandler } from 'react-router';

class Contact extends React.Component {
	render() {
		return (
			<div>
				<div><Link to="contact">Back to List</Link></div>
				<h3>Specific Contact: {this.props.params.contactId}</h3>
				<Link to="detail" params={this.props.params}>Details</Link>
				<RouteHandler {...this.props} />
			</div>
		);
	}
}

module.exports = Contact;

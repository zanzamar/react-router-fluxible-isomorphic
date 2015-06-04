'use strict';

import React from 'react';
import { Link } from 'react-router';

class ContactDetail extends React.Component {
	render() {
		return (
			<div>
				Extra details about a contact...{ ' ' }
				<Link to="contactDetail" params={this.props.params}>Close Details</Link>
			</div>
		);
	}
}

module.exports = ContactDetail;

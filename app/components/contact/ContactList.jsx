'use strict';

import React from 'react';
import { Link } from 'react-router';
import { connectToStores } from 'fluxible/addons';
import ContactsStore from '../../stores/ContactsStore';
import { loadContacts } from '../../actions/ContactRequestActionCreators';

class ContactList extends React.Component {

	static isomorphic = true

	static propTypes = {
		loaded: React.PropTypes.bool,
		contacts: React.PropTypes.array,
		deleting: React.PropTypes.object
	}

	static contextTypes = {
		executeAction: React.PropTypes.func.isRequired
	}

	static willTransitionTo = function( transition, params, query, callback ) {
		callback();
	}

	static willTransitionFrom = function( transition, component ) {
	}

	componentDidMount() {
		this.context.executeAction( loadContacts );
	}

	render() {
		var contactList = this.props.contacts.map( contact => {
			return <li key={contact.firstName}>
				<Link to="contactDetail" params={{contactId: contact.id}}>Name: {contact.firstName}</Link>
			</li>
		});
		return (
			<div>
				<h4>List of Contacts...</h4>
				{ ( this.props.loaded ) ? <ul>{contactList}</ul> : <div>Loading Contacts</div> }
			</div>
		);
	}
}

ContactList = connectToStores(
	ContactList,
	[ ContactsStore ],
	(stores, props ) => {
		return stores.ContactsStore.getState();
	}
);

module.exports = ContactList;

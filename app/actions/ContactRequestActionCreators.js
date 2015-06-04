'use strict';

import { loadedContacts } from './ContactResponseActionCreators';

// [ NOTE ] increase TIMEOUT - the default of 3000ms. See https://github.com/yahoo/fetchr/issues/58
const TIMEOUT = 20000;

module.exports = {
	loadContacts: function( context, payload, done ) {
		context.dispatch( 'LOAD_CONTACTS' );
		context.service.read( 'contacts', {}, { timeout: TIMEOUT }, ( err, data ) => {
			if ( err ) {
				// [ TODO ] - dispatched failed to load contacts...
			}
			context.executeAction( loadedContacts, { contacts: data } );
		});
		done();
	},
	deleteContact: function( context, payload, done ) {
		context.dispatch( 'DELETE_CONTACT' );
		setTimeout( function() {
			//APIUtils.deleteContact( payload.contact );
		}, 3000 );
		done();
	},
	createContact: function( context, payload, done ) {
		context.dispatch( 'CREATE_CONTACT' );
		setTimeout( function() {
			//APIUtils.createContact( payload.contact );
		}, 3000 );
		done();
	}
};

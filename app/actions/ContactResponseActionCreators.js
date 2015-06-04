'use strict';

module.exports = {
	loadedContacts: function( context, payload, done ) {
		context.dispatch( 'CONTACTS_LOADED', payload );
		done();
	},
	deletedContact: function( context, payload, done ) {
		context.dispatch( 'DELETED_CONTACT', payload );
		done();
	},
	createdContact: function( context, payload, done ) {
		context.dispatch( 'CREATED_CONTACT', payload );
		done();
	}
};

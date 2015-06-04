'use strict';

import { createStore } from 'fluxible/addons';

var ContactsStore = createStore({
	storeName: 'ContactsStore',
	handlers: {
		CONTACTS_LOADED: 'handleContactsLoaded',
		DELETE_CONTACT: 'handleDeleteContact',
		DELETED_CONTACT: 'handleDeletedContact',
		CREATED_CONTACT: 'handleCreatedContact'
	},
	initialize: function() {
		this.contacts = [];
		this.deleting = undefined;
		this.loaded = false;
	},
	handleContactsLoaded: function( payload ) {
		this.contacts = payload.contacts;
		this.loaded = true;
		this.emitChange();
	},
	handleDeleteContact: function( payload ) {
		this.deleting = payload.contact;
		this.emitChange();
	},
	handleDeletedContact: function( payload ) {
		this.contacts = this.contacts.filter( function( contact ) {
			return contact.id !== payload.contact.id;
		});
		this.deleting = undefined;
		this.emitChange();
	},
	handleCreatedContact: function( payload ) {
		this.contacts = this.contacts.push( payload.contact )
		this.emitChange();
	},
	getState: function() {
		return {
			contacts: this.contacts,
			deleting: this.deleting,
			loaded: this.loaded
		};
	},
	dehydrate: function() {
		return this.getState();
	},
	rehydrate: function( state ) {
		this.contacts = state.contacts;
		this.deleting = state.deleting;
		this.loaded = state.loaded;
	}
});

module.exports = ContactsStore;

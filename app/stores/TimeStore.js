'use strict';

import { createStore } from 'fluxible/addons';

var TimeStore = createStore({
	storeName: 'TimeStore',
	handlers: {
		CHANGE_ROUTE: 'handleTimeChange',
		UPDATE_TIME: 'handleTimeChange'
	},
	initialize: function() {
		this.time = new Date();
	},
	handleTimeChange: function( payload ) {
		this.time = new Date();
		this.emitChange();
	},
	getState: function() {
		return {
			time: this.time.toString()
		};
	},
	dehydrate: function() {
		return this.getState();
	},
	rehydrate: function( state ) {
		this.time = new Date( state.time );
	}
});

module.exports = TimeStore;

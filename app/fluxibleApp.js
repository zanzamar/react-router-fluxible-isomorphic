'use strict';

import Fluxible from 'fluxible';
import fetchrPlugin from "fluxible-plugin-fetchr";

var fluxibleApp = new Fluxible({
	component: require( './Routes' )
});

fluxibleApp.plug( fetchrPlugin({ xhrPath: '/api' }) );

fluxibleApp.registerStore( require( './stores/TimeStore' ) );
fluxibleApp.registerStore( require( './stores/ContactsStore' ) );

module.exports = fluxibleApp;

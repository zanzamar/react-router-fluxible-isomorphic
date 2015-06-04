'use strict';

module.exports = function( context, payload, done ) {
	context.dispatch( 'CHANGE_ROUTE', payload );
	done();
};

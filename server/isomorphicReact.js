/*-------------------------------------------------------------------------------------------------------------------*\
|
| Enables the serving of isomorphic react.
|
\*-------------------------------------------------------------------------------------------------------------------*/
'use strict';

var React = require( 'react' ),
	Router = require( 'react-router' ),
	FluxibleComponent = require( 'fluxible/addons/FluxibleComponent' ),
	serialize = require( 'serialize-javascript' ),
	debug = require( 'debug' )( 'isomorphicReact:info' ),
	app = require( './server' );

var navigateAction = require( '../app/actions/navigate' ),
	fluxibleApp = require( '../app/fluxibleApp' ),
	HtmlDocument = React.createFactory( require('./HtmlDocument' ) );

var fetchr = fluxibleApp.getPlugin( 'FetchrPlugin' );
fetchr.registerService( require( '../services/contacts' ) );
app.use( fetchr.getXhrPath(), fetchr.getMiddleware() );

module.exports = function( req, res, next ) {
	var context = fluxibleApp.createContext({
		req: req,
		xhrContext: {
			_csrf: req.csrfToken()
		}
	});

	// [ NOTE ] - we have to know what we are loading based upon route and call that action if we want it to rehydate automatically...  and be isomorphic in the true sense.
	//context.executeAction( require( '../app/actions/ContactRequestActionCreators' ).loadContacts );

	debug('Executing navigate action');
	Router.run( fluxibleApp.getComponent(), req.path, function( Handler, state ) {
		context.executeAction(navigateAction, state, function() {
			debug('Rendering Application component into html');
			var Component = React.createFactory( Handler );
			var html = '<!doctype html>' +
				React.renderToStaticMarkup( HtmlDocument({
					state: 'window.FluxibleApp=' + serialize( fluxibleApp.dehydrate( context ) ) + ';',
					componentHTML: React.renderToString(
						React.createElement(
							FluxibleComponent,
							{ context: context.getComponentContext() },
							Component()
						)
					)
				}));

			if ( state.routes[ 0 ].name === 'not-found' ) {
				res.status( 404 );
			}
			res
				.set( 'Content-Type', 'text/html' )
				.send( html );
		});
	});
};



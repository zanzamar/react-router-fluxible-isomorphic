/*global App, document, window */
'use strict';

import React from 'react';
import Router from 'react-router';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';
import fluxibleApp from './fluxibleApp';
import navigateAction from './actions/navigate';

var HistoryLocation = Router.HistoryLocation;
var dehydratedState = window.FluxibleApp;
window.React = React; // For chrome dev tool support

function RenderApp( context, Handler ){
	var Component = React.createFactory( Handler );
	React.render(
		React.createElement(
			FluxibleComponent,
			{ context: context.getComponentContext() },
			Component()
		),
		document.getElementById( 'app' )
	);
}

fluxibleApp.rehydrate( dehydratedState, function( err, context ) {
	if (err) {
		throw err;
	}
	window.context = context;

	var firstRender = true;
	Router.run( fluxibleApp.getComponent(), HistoryLocation, function( Handler, state ) {
		if ( firstRender ) {
			RenderApp( context, Handler );
			firstRender = false;
		} else {
			context.executeAction( navigateAction, state, function() {
				RenderApp( context, Handler );
			});
		}
	});
});

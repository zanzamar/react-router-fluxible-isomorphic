/*-------------------------------------------------------------------------------------------------------------------*\
|
| Base server file for setting up an Express/React app.
|
\*-------------------------------------------------------------------------------------------------------------------*/
'use strict';

import React from 'react';

class HtmlDocument extends React.Component {

	static propTypes = {
		title: React.PropTypes.string,
		componentHTML: React.PropTypes.string,
		state: React.PropTypes.string
	}

	render() {
		return (
			<html>
				<head>
					<meta charSet="utf=8" />
					<title>{this.props.title}</title>
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
					<link rel="stylesheet" href="/assets/styles.css" />
				</head>
				<body>
					<div id="app" dangerouslySetInnerHTML={{__html: this.props.componentHTML}} />
					<script dangerouslySetInnerHTML={{__html: this.props.state}} />
					<script src="/build/js/main.js"></script>
				</body>
			</html>
		);
	}
}

module.exports = HtmlDocument;

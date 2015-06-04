'use strict';

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import Application from './components/Application';
import Home from './components/Home';
import About from './components/About';
import { Contacts, ContactList, Contact, ContactDetail } from './components/contact';
import NotFound from './components/NotFound';

var routes = (
	<Route name="app" path="/" handler={Application}>
		<Route name="about" handler={About} />
		<Route name="contact" handler={Contacts}>
			<Route name="contactDetail" path=":contactId" handler={Contact}>
				<Route name="detail" path="detail" handler={ContactDetail} />
			</Route>
			<DefaultRoute handler={ContactList} />
		</Route>
		<DefaultRoute name="home" handler={Home} />
		<NotFoundRoute handler={NotFound} />
	</Route>
);

module.exports = routes;

'use strict';

import axios from 'axios';

export default {
	name: 'contacts',
	read( req, resource, params, config, done ) {
		done(
			null,
			[
				{
					id: 123123,
					firstName: 'Bob'
				},
				{
					id: 34234234,
					firstName: 'Jerry'
				}
			]
		);
	}
};

/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	attributes: {

		user: {
			type: 'string',
			required: true
		},

		recipient: {
			type: 'string',
			required: true,
		},

		content: {
			type: 'text',
			required: true
		},

		parent: {
			type: 'string'
		},

		opened: {
			type: 'boolean',
			required: true
		}
	}

};

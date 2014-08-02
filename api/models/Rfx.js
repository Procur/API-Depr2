/**
 * Rfx.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    user: {
      type: 'string',
      required: true
    },

    type: {
      type: 'string',
      required: true
    },

    recipient: {
      type: 'string',
      required: 'true'
    },

    parent: {
      type: 'string'
    },

    content: {
      type: 'text',
      required: true
    }

  }
};

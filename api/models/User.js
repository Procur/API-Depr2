/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  tableName: 'user',
  schema: true,
  adapter: 'api',

  attributes: {

    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    emailVerified: {
      type: 'boolean',
      required: true
    },
    profileComplete: {
      type: 'boolean',
      required: true
    },
    activeMode: {
      type: 'string'
    },
    image: {
      type: 'string',
      unique: true
    },
    jobTitle: {
      type: 'string'
    },
    companyAdministrator: {
      type: 'boolean',
      required: true
    },

    //ASSOCIATIONS
    company: {
      model: 'Company'
    },

    //UTILITY
    active: {
      type: 'boolean',
      required: true
    },

    globalAdministrator: {
      type: 'boolean',
      required: false
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      delete obj.id;
      return obj;
    }
  }
};

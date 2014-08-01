/**
* Company.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  adapter: 'api',
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    phoneNumberCountryCode: {
      type: 'string',
      required: true
    },
    phoneNumber: {
      type: 'string',
      required: true
    },
    phoneExtension: {
      type: 'string'
    },
    faxCountryCode: {
      type: 'string'
    },
    faxNumber: {
      type: 'string'
    },
    faxExtension: {
      type: 'string'
    },
    email: {
      type: 'email',
      required: true
    },
    website: {
      type: 'string'
    },
    industry: {
      type: 'string'
    },
    employeeCount: {
      type: 'integer'
    },
    primaryMode: {
      type: 'string'
    },
    wizardComplete: {
      type: 'boolean'
    },
    handle: {
      type: 'string',
      unique: true
    },
    active: {
      type: 'boolean',
      required: true
    },

    //ASSOCIATIONS
    users: {
      model: 'User'
    },
    buyer: {
      model: 'Buyer'
    },
    supplier: {
      model: 'Supplier'
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.id;
      return obj;
    }

  }
};

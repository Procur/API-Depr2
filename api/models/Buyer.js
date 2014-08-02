/**
 * Buyer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  //ASSOCIATIONS
  adapter: 'api',
  attributes: {
    company: {
      model: 'Company'
    },

    sibling: {
      model: 'Supplier'
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.id;
      return obj;
    }
  }
};

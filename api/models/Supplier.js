/**
* Supplier.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  adapter: 'api',
  attributes: {

    //ASSOCIATIONS
    company: {
      model: 'Company'
    },
    sibling: {
      model: 'Buyer'
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.id;
      return obj;
    }
  }
};

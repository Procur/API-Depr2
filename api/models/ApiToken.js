/**
* ApiToken.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  adapter: 'api',
  attributes: {
    user: {
      type: 'string',
      required: true,
      unique: true
    },
    token: {
      type: 'string',
      required: true,
      unique: true
    },
    activeUntil: {
      type: 'date',
      required: true
    },
    expired: {
      type: 'boolean'
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.activeUntil;
      delete obj.createdAt;
      delete obj.updatedAt;
      delete obj.id;
      delete obj.user;
      return obj;
    }
  }
};

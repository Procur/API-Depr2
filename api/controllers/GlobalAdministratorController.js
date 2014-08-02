/**
 * GlobalAdministratorController
 *
 * @description :: Server-side logic for managing globaladministrators
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  index: function (req, res) {
    User.find({ globalAdministrator: true }).exec(function(err, users){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(users, res);
      return res.json(200, users);
    });
  },

  show: function (req, res) {
    var p = req.params;
    User.findOne({ id: p.id, globalAdministrator: true}, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      return res.json(200, user);
    });
  },

  makeAdmin: function (req, res) {
    var p = req.params;
    User.findOne({ id: p.id }, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      User.update(user, { globalAdministrator: true }, function(err, user){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(user, res);
        return res.json(200, user);
      });
    });
  },

  demote: function (req, res) {
    var p = req.params;
    User.findOne({ id: p.id, globalAdministrator: true}, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      User.update(user, { globalAdministrator: false }, function(err, user){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(user, res);
        return res.json(202, user);
      });
    });
  }
};


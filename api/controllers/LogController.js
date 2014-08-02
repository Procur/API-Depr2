/**
 * LogController
 *
 * @description :: Server-side logic for managing logs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  index: function (req, res) {
    Log.find({ }).exec(function (err, logs) {
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(logs, res);
      return res.json(200, logs);
    });
  },

  show: function (req, res) {
    var p = req.params;
    Log.findOne({ id: p.id }, function(err, log){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(log, res);
      return res.json(200, log);
    });
  },

  create: function (req, res) {

  },

  destroy: function (req, res) {

  },

  addNote: function (req, res) {
    var p = req.params;
    Log.findOne({ id: p.id }, function(err, log){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(log, res);
      Log.update(log, { note: p.note }, function(err, log){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(log, res);
        return res.json(202, log);
      })
    })
  },

  updateNote: function (req, res) {

  },

  deleteNote: function (req, res) {

  },

  setFlag: function (req, res) {

  },

  unsetFlag: function (req, res) {

  }
};

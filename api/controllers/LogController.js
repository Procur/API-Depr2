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

  destroy: function (req, res) {
    var p = req.params;
    Log.findOne({ id: p.id }, function(err, log){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(log, res);
      Log.destroy({ id: log.id }, function(err){
        errorHandler.serverError(err, res);
        return res.json(202, "Log successfully destroyed.");
      })
    });
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
      });
    });
  },

  updateNote: function (req, res) {
    var p = req.params;
    LogFunctions.findById(p.id, function(log){
      Log.update(log, { note: '' }, function(err, log){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(log, res);
        return res.json(202, log);
      });
    });
  },

  deleteNote: function (req, res) {
    var p = req.params;
    Log.findOne({ id: p.id }, function(err, log){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(log, res);
      Log.update(log, { note: ''}, function(err, log){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(log, res);
        return res.json(202, log);
      });
    });
  },

  setFlag: function (req, res) {
    var p = req.params;
    LogFunctions.findById(p.id, function(log){
      UserFunctions.findByApiToken(p.apitoken, function(user){
        //Log.update(log, {}) hmmmm... a bit unsure here
      });
    });
  },

  unsetFlag: function (req, res) {

  }
};

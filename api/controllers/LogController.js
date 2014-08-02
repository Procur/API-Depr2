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

  },

  create: function (req, res) {

  },

  destroy: function (req, res) {

  },

  addNote: function (req, res) {

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

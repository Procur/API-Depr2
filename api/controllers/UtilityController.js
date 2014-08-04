/**
 * UtilityController
 *
 * @description :: Server-side logic for managing utilities
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  heartbeat: function (req, res) {
    res.send(200, 'Procur API v.0.01.0');
  }

};

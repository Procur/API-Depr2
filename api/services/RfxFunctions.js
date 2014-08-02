module.exports = {

  findByUser: function(userId, callback) {
    Rfx.findOne({ user: userId }, function(err, rfx){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(rfx, res);
      callback(rfx);
    });
  },

  findByRecipient: function(userId, callback){
    Rfx.findOne({ recipient: userId }, function(err, rfx){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(rfx, res);
      callback(rfx);
    });
  }
}
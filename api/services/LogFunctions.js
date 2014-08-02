module.exports = {

  findById: function(logId, callback){
    Log.findOne({ id: logId }, function(err, log){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(log, res);
      callback(log);
    });
  }
}
module.exports = {

  findOneById: function(messageId, callback){
    Message.findOne({ id: messageId}, function(err, message){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(message, res);
      callback(message);
    });
  },

  findAllByUserId: function(userId, callback){
    User.findOne({ id: userId }, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      Message.find({ user: user.id }).sort({ createdAt: 'desc' }).exec(function(err, messages){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(messages, res);
        callback(messages);
      });
    });
  },

  findAllByRecipientUserId: function(recipientId, callback) {
    User.findOne({ id: recipientId }, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      Message.find({ recipient: user.id }).sort({ createdAt: 'desc' }).exec(function(err, messages){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(messages, res);
        callback(messages);
      });
    });
  }
}
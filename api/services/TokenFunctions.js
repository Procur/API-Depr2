module.exports = {

  validateByUserId: function(apitoken, userId, res, callback){
    User.findOne({ id: userId }, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      ApiToken.findOne({ user: user.id }, function(err, token){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(token, res);
        if(apitoken == token){
          callback(token);
        }
        else{
          Log.create({ content: 'An invalid token was used' }, function(err, log){
            if(log !== undefined){
              res.send(500, 'Invalid API token');
            }
          });
        }
      });
    });
  },

  validateByUserEmail: function(apitoken, email, callback){
    User.findOne({ email: email }, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      ApiToken.findOne({ user: user.id }, function(err, token){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(token, res);
        if(apitoken == token){
          callback(token);
        }
        else {
          Log.create({ content: 'An invalid token was used' }, function(err, log){
            if(log !== undefined){
              res.send(500, 'Invalid API token');
            }
          });
        }
      });
    });
  },

  findByUserEmail: function(email, callback){
    User.findOne({ email: email }, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      ApiToken.findOne({ user: user.id }, function(err, token){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(token, res);
        callback(token);
      });
    });
  },

  findByUserId: function(id, callback){
    User.findOne({ id: id }, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      ApiToken.findOne({ user: user.id }, function(err, token){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(token, res);
        callback(token);
      });
    });
  }
};

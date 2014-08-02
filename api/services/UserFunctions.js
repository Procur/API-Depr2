module.exports = {

  findByEmail: function(email, callback) {
    User.findOne({ email: email }, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      callback(user);
    })
  },

  findByApiToken: function(apitoken, callback){
    ApiToken.findOne({ token: apitoken }, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      callback(user);
    });
  },

  findByCompany: function(companyId, callback){
    Company.findOne({ id: companyId }, function(err, company){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(company, res);
      User.findOne({ id: company.user }, function(err, user){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(user, res);
        callback(user);
      })
    })
  }
};

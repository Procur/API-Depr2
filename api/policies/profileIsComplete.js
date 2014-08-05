module.exports = function (req, res, next) {
  var p = req.params;

  ApiToken.findOne({ token: p.apitoken }, function(err, apitoken){
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(apitoken, res);
    User.findOne({ id: apitoken.user }, function(err, user){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      //
    });
  });
};

module.exports = function (req, res, next) {
  var p = req.params;

  ApiToken.findOne({ token: p.apitoken }, function(err, apitoken){
    errorHandler.serverError(err, res);
    if(apitoken === undefined){
      return res.json(400, 'Invalid API token');
    }
    else {
      User.findOne({ id: apitoken.user }, function(err, user){
        errorHandler.serverError(err, res);
        if(user.companyAdministrator !== true) {
          return res.json(400, "User has insufficient priveleges to perform this action");
        }
        else {
          return next();
        }
      });
    }
  });
};

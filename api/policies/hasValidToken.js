module.exports = function (req, res, next) {
  var p = req.params;

  ApiToken.findOne({ token: p.apitoken }, function(err, apitoken){
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(apitoken, res);
    User.findOne({ id: apitoken.user }, function(err, user){
      if(user !== undefined){
        return next();
      }
      else {
        return res.json(400, 'Invalid API token');
      }
    });
  });
};

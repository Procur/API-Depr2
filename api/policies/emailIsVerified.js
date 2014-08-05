module.exports = function (req, res, next) {
  var p = req.params;

  UserFunctions.findByApiToken(p.apitoken, function(user){
    if(user.emailVerified == true) {
      return next();
    }
    else {
      return res.json(400, 'Please verify your email address.');
    }
  });
};

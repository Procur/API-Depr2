module.eports = {

  //GENERAL ACTIONS

  create: function (req, res) {

  },

  show: function (req, res) {

  },

  update: function (req, res) {

  },

  deactivate: function (req, res) {

  },

  //COMPANY MEMBERSHIP ACTIONS

  requestToJoinCompany: function (req, res) {

  },

  joinCompany: function (req, res) {

  },

  leaveCompany: function (req, res) {

  },

  //BUYER / SUPPLIER ACTIONS

  setDefaultMode: function (req, res) {

  },

  //ACCOUNT SETTINGS ACTIONS

  changeEmail: function (req, res) {

  },

  addProfileImage: function (req, res) {

  },

  changeProfileImage: function (req, res) {

  },

  toggleMode: function(req, res){
    var p = req.params;
    UserFunctions.findByApiToken(p.apitoken, function(user){
      Company.findOne({ user: user.id }, function(err, company){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(company, res);
        if((company.buyer == true) && (company.supplier == true)){
          User.update(user, { activeMode: p.mode }, function(err, user){
            errorHandler.serverError(err, res);
            errorHandler.nullCollection(user, res);
            return res.json(200, user);
          });
        }
      });
    });
  }


};

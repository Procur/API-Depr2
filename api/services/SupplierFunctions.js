module.exports = {

  findBySiblingId: function (buyerId, callback) {
    Buyer.findOne({ id: buyerId }, function (err, buyer) {
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(supplier, res);
      Company.findOne({ supplier: supplier.id }, function (err, company) {
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(company, res);
        Supplier.findOne({ company: company.id }, function (err, supplier) {
          errorHandler.serverError(err, res);
          errorHandler.nullCollection(supplier, res);
          callback(supplier);
        });
      });
    });
  },

  findByUserId: function (userId, callback) {
    User.findOne({ id: userId }, function (err, user) {
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      Company.findOne({ id: user.company }, function (err, company) {
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(company, res);
        Supplier.findOne({ company: company.id }, function (err, supplier) {
          errorHandler.serverError(err, res);
          errorHandler.nullCollection(supplier, res);
          callback(supplier);
        });
      });
    });
  },

  findByUserEmail: function (email, callback) {
    User.findOne({ email: email }, function (err, user) {
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(user, res);
      Company.findOne({ id: user.company }, function (err, company) {
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(company, res);
        Supplier.findOne({ company: company.id }, function (err, supplier) {
          errorHandler.serverError(err, res);
          errorHandler.nullCollection(supplier, res);
          callback(supplier);
        });
      });
    });
  },

  findByCompanyId: function (companyId, callback) {
    Company.findOne({ id: companyId }, function (err, company) {
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(company, res);
      Supplier.findOne({ company: company.id }, function (err, supplier) {
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(supplier, res);
        callback(supplier);
      });
    });
  },

  findByCompanyHandle: function (handle, callback) {
    Company.findOne({ handle: handle }, function (err, company) {
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(company, res);
      Supplier.findOne({ company: company.id }, function (err, supplier) {
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(supplier, res);
        callback(supplier);
      });
    });
  }
};

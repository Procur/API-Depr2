module.exports = {

  findBySiblingId: function (supplierId, callback) {
    Supplier.findOne({ id: supplierId }, function (err, supplier) {
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(supplier, res);
      Company.findOne({ supplier: supplier.id }, function (err, company) {
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(company, res);
        Buyer.findOne({ company: company.id }, function (err, buyer) {
          errorHandler.serverError(err, res);
          errorHandler.nullCollection(buyer, res);
          callback(buyer);
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
        Buyer.findOne({ company: company.id }, function (err, buyer) {
          errorHandler.serverError(err, res);
          errorHandler.nullCollection(buyer, res);
          callback(buyer);
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
        Buyer.findOne({ company: company.id }, function (err, buyer) {
          errorHandler.serverError(err, res);
          errorHandler.nullCollection(buyer, res);
          callback(buyer);
        });
      });
    });
  },

  findByCompanyId: function (companyId, callback) {
    Company.findOne({ id: companyId }, function (err, company) {
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(company, res);
      Buyer.findOne({ company: company.id }, function (err, buyer) {
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(buyer, res);
        callback(buyer);
      });
    });
  },

  findByCompanyHandle: function (handle, callback) {
    Company.findOne({ handle: handle }, function (err, company) {
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(company, res);
      Buyer.findOne({ company: company.id }, function (err, buyer) {
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(buyer, res);
        callback(buyer);
      });
    });
  }
};

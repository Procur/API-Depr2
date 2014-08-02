module.exports = {

  findAllMembersById: function(companyId, callback){
    Company.findOne({ id: companyId }).populate('users').exec(function(err, company){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(users, res);
      callback(company);
    });
  },

  findAllMembersByHandle: function(handle, callback){
    Company.findOne({ handle: handle }).populate('users').exec(function(err, company){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(company, res);
      callback(company);
    });
  },

  findAllMembersByBuyerId: function(buyerId, callback){
    Buyer.findOne({ id: buyerId }, function(err, buyer){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(buyer, res);
      Company.findOne({ buyer: buyer.id }).populate('users').exec(function(err, company){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(company, res);
        callback(company);
      });
    });
  },

  findAllMembersBySupplierId: function(supplierId, callback){
    Supplier.findOne({ id: supplierId }, function(err, supplier){
      errorHandler.serverError(err, res);
      errorHandler.nullCollection(supplier, res);
      Company.findOne({ supplier: supplier.id }).populate('users').exec(function(err, company){
        errorHandler.serverError(err, res);
        errorHandler.nullCollection(company, res);
        callback(company);
      });
    });
  }
};

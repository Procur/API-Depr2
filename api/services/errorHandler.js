module.exports = {

  serverError: function(err, res){
    if(err !== undefined){
      Log.create({ content: err }, function(err, log){
        if(log !== undefined){
          return res.send(500, 'Lost in space!');
        };
      });
    }
  },

  nullCollection: function(collection, res){
    if (collection === undefined){
      Log.create({ content: err }, function(err, log){
        if(log !== undefined){
          return res.send(404, 'Not Found');
        }
      });
    }
  }
}

'use strict';

exports = module.exports = function(app, mongoose) {
  var demoSchema = new mongoose.Schema({
    name : String,
    num : { type: Number, min: 0, max: 1.0 },
    isfriend : Boolean
  }, { collection: 'demodata' });
  app.db.model('Demo', demoSchema);
};

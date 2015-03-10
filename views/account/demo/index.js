// views/demo/index.js

'use strict';

// serve up the demo visualization code
exports.init = function(req, res){
  res.render('account/demo/index');
};

// look up data for the pdial visualization
exports.lookupData = function(req, res) {

  var query = {  };

  req.app.db.models.Demo.find(query, function (err, result) {
        if (err) { 
            res.send({"error":"unable to lookup data"});
        } else {
            console.log("found result array:", result.length);
            res.send(result);
        }
    });
  
};
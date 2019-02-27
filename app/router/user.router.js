let express = require('express');
let router = express.Router();

// GET endpoint to test
router.get('/checking', function(req, res){
   res.json({
      "Tutorial": "Welcome to the Node express JWT Tutorial"
   });
});

module.exports = router;

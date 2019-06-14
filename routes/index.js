let express = require('express');
let router = express.Router();

//Login Page - GET REQUEST
router.get('/', function(req,res) {
   res.render('index');
   //console.log("hello there")
})

module.exports = router;

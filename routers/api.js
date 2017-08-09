var express = require('express');
var router = express.Router();

/*用户注册*/
router.get('/user/register',function(req,res,next){
	res.send('Api-User')
});

module.exports = router;

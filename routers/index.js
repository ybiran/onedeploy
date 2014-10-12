var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'OneDeploy' });
});

module.exports = router;

router.get('/helloworld', function(req,res) {
        res.render('helloworld', { title: 'Hello World' })
});
router.get('/one', function(req,res) {
        res.render('one', { title: 'One Deploy' })
});

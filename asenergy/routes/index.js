var express = require('express');
var router = express.Router();

// var html_pages = path.join(__dirname +'public/pages'); 
// console.log(html_pages); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next){
    res.sendFile('pages/index.html');
});

module.exports = router;

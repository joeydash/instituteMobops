var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Institute Mob-ops' });
});

router.post('/', function(req, res, next) {
    res.render('index', { title: 'Institute Mob-ops' });
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "admin",
        password: "wmo_16_17",
        database: "joeyDB"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM customers WHERE ID="+req.body.value, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
});

module.exports = router;

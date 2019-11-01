var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'sakila'
});

connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})

/* GET home page. */
router.get('/actor/:id', function(req, res, next) {
  let actorId = parseInt(req.params.id);
  console.log(actorId);

  let idQuery = `SELECT * FROM actor WHERE actor_id=${actorId}`;
  console.log(idQuery);

  connection.query(idQuery, (err, result) => {
    console.log(result);
    if (result.length > 0) {
      res.render('index', {
        actor: result[0]
      });
    } else {
      res.send('not a valid id');
    }
  });
});

module.exports = router;

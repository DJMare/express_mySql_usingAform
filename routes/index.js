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
    if (err) {
      console.log(err.message);
      next();
      return;
    }
    if (result.length > 0) {
      res.render('index', { actor: result[0] });
    } else {
      res.send('not a valid id');
    }
  })
});

const actorList = `SELECT * FROM actor`;

  router.get('/actor', function(req, res, next){
    connection.query(actorList, function(err, result) {
      res.render('actor', { actors: result })
    });
  });

  //Create a post() method with a route to /actor
  router.post('/actor', function(req, res, next) {
  //Add a console.log to log the req.body from the form to log the input values passed to the route
    console.log(req.body);
  //Create an object variable named newActor with the properties first_name and last_name and set them from the req.body
    const newActor = {
      first_name: req.body.first_name,
      last_name: req.body.last_name
    };
  //Add a variable named selectActor that is set to a SELECT statement with a WHERE condition that checks if the actor already exists
    const selectActor = `SELECT *
    FROM actor
    WHERE first_name = '${newActor.first_name}'
    AND last_name = ${newActor.last_name}`;
  //call a connection.query() method that runs the selectActor query
      connection.query(selectActor, function(err, result) {
  //within the .query() method add an if statement that says if the result.length is greater than zero, send back a string indicating that actor already exists in the database
        if (result.length > 0) {
          res.send('Sorry, that actor already exists');
  //add an else statement within the .query() method that will run an INSERT query using the newActor variable. If there is an error, send back a string, otherwise redirect the user to the page /actor
        } else {
          let newActorQuery = `INSERT INTO actor(first_name, last_name)
          VALUES('$newActor.first_name', function(err, insertResult){
            if (err) {
              res.send('Oops, something went wrong');
            } else {
              res.redirect('/actor')`
            };
          });
      });

module.exports = router;

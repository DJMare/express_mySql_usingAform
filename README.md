# express_mySql_usingAform
Using a form to insert a new Actor into the mysql database in an express app.

Install mySQL: https://dev.mysql.com/downloads/installer/ 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_mySQL: 

    express --view=hbs express_mySQL_QueriesInRoutes

(6) Once the process is complete, navigate into the express_mySQL_usingAform directory: 
   cd express_mySQL_usingAform 

(7) Now in the express_mySQL_usingAform directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_mySQL_usingAform directory:

    npm install -save-dev nodemon
    
(10) Install mySQL:

    npm install --save mysql

(11) Start the server with Nodemon with the following command: 

    nodemon

(12) Open in VS code:

    code . 

MYSQL

(13) run a select query in mySQL to view all the actors:  ![run a select query in mySQL to view all actors (mySQL_usingAform)](https://user-images.githubusercontent.com/35668707/68001251-8f9b8d80-fc20-11e9-83d7-92380394e4a1.JPG)


VS CODE

(14) Navigate to the routes/index.js file and update. Need to require the mySQL, add the connection information to connect to mySQL: ![open index js file (express_mySQL_usingAform)](https://user-images.githubusercontent.com/35668707/68001142-097f4700-fc20-11e9-84fe-7ed4d2bd4905.JPG)

(15) Add get() method to route /actor to the index.js file: ![create new get() method in index js file for actor (express_mySQL_usingAform)](https://user-images.githubusercontent.com/35668707/68065553-36972c80-fce8-11e9-8caf-c647da393fdb.JPG)

(16) Create views/actor.hbs file with form and loop: ![create actor hbs file with form and loop(express_mySQL_usingAform)](https://user-images.githubusercontent.com/35668707/68001494-80690f80-fc21-11e9-8b8d-6e387d60edc1.JPG)
 
(17) Update post() method to log form and add newActor: ![update post() method to log form and add newActor in index js file (express_mySQL_usingAform)](https://user-images.githubusercontent.com/35668707/68065162-3f84ff80-fce2-11e9-9468-ef414960bb3c.JPG)

(18) Create a new variable of actorList to run a SELECT statement in the routes.index.js file to check if the actor is already in the list: ![create new variable actorList to run SELECT statement in index js file for actor (express_mySQL_usingAform)](https://user-images.githubusercontent.com/35668707/68065174-8c68d600-fce2-11e9-8906-9d56130e7014.JPG)

WEB BROWSER

(19) Navigate to localhost:3000/actor to view form and list: ![navigate to localhost3000 to see form and list of actors (express_mySQL_usingAform)](https://user-images.githubusercontent.com/35668707/68065631-62ff7880-fce9-11e9-961a-65a1489fc1d2.JPG)

(20) Fill out form to add new actor: ![navigate to localhost3000 and fill out form to add new actor (express_mySQL_usingAform)](https://user-images.githubusercontent.com/35668707/68065657-a5c15080-fce9-11e9-92c4-6cd1e9b6a695.JPG)

COMMAND PROMPT

(21) View new actor added in the terminal: ![new actor added to database](https://user-images.githubusercontent.com/35668707/68065668-d608ef00-fce9-11e9-9935-3a3cd50c9384.JPG)


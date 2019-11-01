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


VS CODE

(13) Navigate to the routes/index.js file and update. Need to require the mySQL: ![open index js file (express_mySQL_usingAform)](https://user-images.githubusercontent.com/35668707/68001142-097f4700-fc20-11e9-84fe-7ed4d2bd4905.JPG)


(14) Add the connection information to connect to mySQL in routes/index.js file: 

(15) Add info for idQuery and the req.params.id to the index.js file: 

(16) Navigate to views/index.hbs file: 

(17) Update views/index.hbs file: 

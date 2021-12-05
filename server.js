//Adding dependancies
const express = require( 'express' );
const session = require( 'express-session' );
const path = require( 'path' );
const {PeopleAPIRouter} = require( './server/routes/peopleRoute' );
const cors = require('cors');

//Connecting database with the server
require( './server/config/database' );


//Initializing express app
const app = express();

//Setting locations of views
app.set( 'views', __dirname + '/client/views' );
app.set( 'view engine', 'ejs' );
//Setting location of static folder
app.use(express.static(path.join(__dirname, "/client/static")));

//Setting dependancies  specs required
app.use( cors() );
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 20 }
}));

//Setting which routers will be used
app.use( '/', PeopleAPIRouter );

//Setting the Port used to run the server
app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});
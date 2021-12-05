const express = require( 'express' );
const PeopleAPIRouter = express.Router();
const {PeopleAPIController} = require('../controllers/peopleController');

PeopleAPIRouter
    .get( '/', PeopleAPIController.index );

PeopleAPIRouter
    .get( '/new/:name', PeopleAPIController.addPerson );

PeopleAPIRouter
    .get( '/:name', PeopleAPIController.personDetails);

PeopleAPIRouter
    .get( '/remove/:name', PeopleAPIController.deletePerson);


[]
module.exports = {PeopleAPIRouter}



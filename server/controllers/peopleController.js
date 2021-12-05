const {PeopleModel} = require( '../models/peopleModel')

const PeopleAPIController  = {

    index: function(request, response){

        PeopleModel.getAllNames()
            .then ( names =>{
                response.status(200).json(names);
            })
            .catch(error => {
                console.log(error);
                response.statusMessage = "Something when wrong";
                response.status(400).end()
            })
    },
    addPerson: function(request, response){
        let name = request.params.name;
        let created_at = new Date();
        let updated_at = new Date();
        if(name){
            person = {
                name,
                created_at,
                updated_at
            }
            console.log(name);
            PeopleModel
                .createName(person)
                .then ( personResult =>{
                        response.status(200).json(personResult);                
                });
        }
        else{
            response.statusMessage = "You need to specify a name";
            response.status( 406 ).end();
        };        
    },
    personDetails: function(request, response){
        let name = request.params.name;
        PeopleModel
            .getNameById(name)
            .then( result =>{
                response.status( 200 ).json( result );
            });
    },
    deletePerson: function(request, response){
        let name = request.params.name;
        PeopleModel
        .getNameById(name)
        .then( userResult =>{
            if( userResult === null){
                throw new Error( "That name doesn't exist" );
            }
            else{
                PeopleModel
                .deleteName( name)
                .then( result=>{
                    response.status( 404 ).end();
                });
            }
            
        });
    }
}


module.exports = {PeopleAPIController}
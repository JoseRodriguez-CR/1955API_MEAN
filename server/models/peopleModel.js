const mongoose = require('mongoose');


const PeopleSchema = new mongoose.Schema({
    created_at : { 
        type: Date, 
        required: true, 
        default: Date.now 
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now 
    },
    name : {
        type : String,
        required : true,
        unique : true
    }
});

const People = mongoose.model( 'people', PeopleSchema );

const PeopleModel = {

    createName: function(name){
        return People.create(name)
    },
    getAllNames : function(){
        return People.find();
    },
    getNameById : function( name ){
        return People.findOne({ name });
    },
    deleteName : function( name ){
        return People.remove({ name });
    }
}

module.exports = {PeopleModel};
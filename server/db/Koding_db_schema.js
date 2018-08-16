/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/Koding_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_Koding_db_schema = [];
const db_Koding_db = [];

/**
 * SCHEMA DB Koding_db
 */



 /**
  * User
  */
db_Koding_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./Koding_db_customSchema.js');
var Koding_db_model = require('./Koding_db_crud.js');

// Declare mongoose model

db_Koding_db.User = Koding_db_model.connection.model('User', db_Koding_db_schema.User );

module.exports = db_Koding_db;

// Create ADMIN user if does not exist
createUser.createUser();

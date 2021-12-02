const mongoose = require('mongoose');
const userModel = require('./model');
// const { ERROR_MESSAGE,SUCCESS_MESSAGE } = require("../utils/constants.js");
// const URLCONFIG = require('../config/url');

/**
 * Establish a connection to database
 */
const connectDatabase = async () => {
	try {
		await mongoose.connect( "mongodb://mongo:27017/dockerExample", {
		// await mongoose.connect("mongodb://localhost:27017/dockerExample", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (error) {
		console.log('error.toString2');
	}
};


/**
 * Connection status
 * 
 */
const connectionDBStatus = async () => {
	try {
		var db = mongoose.connection;
		db.on("error", (error) => {
			throw new Error('ERROR_MESSAGE.PG_DB_CONNECTION_ERROR2');
		});
		db.once("open", function (callback) {
			console.log('SUCCESS_MESSAGE.MONGO_CONNECTION_SUCCESS');
		});
	} catch (error) {
		console.log(error.toString());
		throw new Error('ERROR_MESSAGE.PG_DB_CONNECTION_ERROR3');
	}
};


/**
 * Connection status
 * 
 */
const saveToDB = async (data) => {
	try {
		const res = await userModel.create(data);
		return res;
	} catch (error) {
		console.log(error.toString());
		throw new Error('ERROR_MESSAGE.PG_DB_CONNECTION_ERROR3');
	}
};

module.exports = {
	connectDatabase,
	connectionDBStatus,
	saveToDB
};

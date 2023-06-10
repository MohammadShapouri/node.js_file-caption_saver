const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js');


// const sequelize = new Sequelize({
// 	dialect: 'sqlite',
// 	storage: './database.sqlite'
// });

const sequelize = new Sequelize(
	config.database.database_name,
	config.database.database_user,
	config.database.database_password,
	{
	    host: config.database.database_host,
	    dialect: 'mariadb'
	});


sequelize.authenticate()
	.then(() => {console.log('Connection has been established successfully.')})
	.catch((error) => {console.error('Unable to connect to the database:', error)});



const FileAndCaption = sequelize.define('FileAndCaption', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		unique: true,
		autoIncrement: true
	},
	caption: {
		type: DataTypes.STRING,
		allowNull: true,
		unique: false
	},
	file_path: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false
	}
});


sequelize.sync()
	.then(() => {
		console.log('Table created successfully!');
	})
	.catch((error) => {
		console.error('Unable to create table: ', error);
	});


async function createFileAndCaption(body) {
	return await FileAndCaption.create({ caption: body.caption,
										file_path: body.file_path
										});
}

async function getAllFileAndCaptionsQuery(body) {
	return await FileAndCaption.findAll();
}



module.exports.createFileAndCaption = createFileAndCaption;
module.exports.getAllFileAndCaptionsQuery = getAllFileAndCaptionsQuery;
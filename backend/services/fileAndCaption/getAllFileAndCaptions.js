const {getAllFileAndCaptionsQuery} = require('./../../models/fileAndCaption.model.js');



async function getAllFileAndCaptions(req, res) {
	try {
		const allFileAndCaptions = await getAllFileAndCaptionsQuery();
		return res.status(200).send(allFileAndCaptions);
	} catch(error) {
		console.log(error);
		return res.status(400).json('Error');
	}

}

module.exports.getAllFileAndCaptions = getAllFileAndCaptions;
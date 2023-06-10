const {createFileAndCaption, getAllFileAndCaptionsQuery} = require('./../../models/fileAndCaption.model.js');
// const {validateCreateFileAndCaptionInputs} = require('./validator.js');


async function addFileAndCaption(req, res) {
	try {
		// const validationResult = validateCreateFileAndCaptionInputs(req.body);
		// if(validationResult !== null) return res.status().send(validationResult);

		req.body.file_path = req.file.path;
		const creationResult = await createFileAndCaption(req.body);
		return res.status(200).send(creationResult);
	} catch(error) {
		console.log(error);
		return res.status(400).json('Error');
	}

}



module.exports.addFileAndCaption = addFileAndCaption;

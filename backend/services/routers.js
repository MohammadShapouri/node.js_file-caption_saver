const express = require('express');
const {uploadManager} = require('./../middlewares/uploadManager.js')

const router = express.Router();

const {addFileAndCaption} = require('./fileAndCaption/addFileAndCaption.js');
const {getAllFileAndCaptions} = require('./fileAndCaption/getAllFileAndCaptions.js');




router.post('/', uploadManager.single('file'), addFileAndCaption);
router.get('/', getAllFileAndCaptions);


module.exports = router;
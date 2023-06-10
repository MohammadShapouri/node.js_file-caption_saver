const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, Date.now()+'--'+originalname);
    }
});



module.exports.uploadManager = multer({ storage });
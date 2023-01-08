const multer = require("multer");

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		const pathStorage = `${__dirname}/../storage`;
		cb(null, pathStorage);
	},
	filename: function(req, file, cb) {
		const ext = file.originalname.split(".").pop();
		const filename = `file-${Date.now()}.${ext}`; // returns the current timestamp in unix format, i.e. returns a random integer that changes for every second
		cb(null, filename);
	}
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;

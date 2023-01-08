const express = require("express");
const router = express.Router();
const {
	getItem,
	getAllItems,
	createItem
} = require("../controllers/tracks.js");

router.get("/", getAllItems);

router.post("/", createItem);

module.exports = router;

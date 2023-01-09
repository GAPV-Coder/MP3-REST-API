const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks.js");
const {
	getItem,
	getAllItems,
	createItem
} = require("../controllers/tracks.js");

router.get("/", getAllItems);

router.post("/", validatorCreateItem, createItem);

module.exports = router;

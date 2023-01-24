const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks.js");
const {
	getItem,
	getAllItems,
	createItem,
	updateItem,
	deleteItem
} = require("../controllers/tracks.js");
const {
	validateId,
	validateObjectDataCreate,
	validateObjectDataUpdate
} = require("../validators/tracks.js");

router.get("/", getAllItems);

router.get("/:id", validateId, getItem);

router.post("/", validateObjectDataCreate, createItem);

router.put("/:id", validateObjectDataUpdate, updateItem);

router.delete("/:id", validateId, deleteItem);

module.exports = router;

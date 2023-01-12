const mongoose = require("mongoose");
const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleHttpError.js");

/**
 * Get detail by single row
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
	const data = ["hola", "mundo"];

	res.send({ data });
};

/**
 * Get all items
 * @param {*} req
 * @param {*} res
 */
const getAllItems = async (req, res) => {
	const data = await tracksModel.find({});
	res.send({ data });
};

/**
 * Upload and create record with public source
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
	try {
		req = matchedData(req);
		console.log(req);
		const data = await tracksModel.create(req);
		res.send({ data });
	} catch (e) {
		handleHttpError(res, e);
	}
};

/**
 * Update detail row
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {};

/**
 * Delete row
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {};

module.exports = { getAllItems, getItem, createItem, updateItem, deleteItem };

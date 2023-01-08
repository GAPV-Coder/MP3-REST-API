const mongoose = require("mongoose");
const { storagesModel } = require("../models");

const PUBLIC_URL = process.env.PUBLIC_URL;

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
	const data = await storagesModel.find({});
	res.send({ data });
};

/**
 * Upload and create record with public source
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
	const { body, file } = req;
	console.log(file);
	const fileData = {
		filename: file.filename,
		url: `${PUBLIC_URL}/${file.filename}`
	};
	const data = await storagesModel.create(fileData);
	res.send({ file });
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

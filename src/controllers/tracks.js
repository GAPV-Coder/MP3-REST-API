const mongoose = require("mongoose");
const { tracksModel } = require("../models");

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
	console.log(data);
	res.send({ data });
};

/**
 * Upload and create record with public source
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
	const { body } = req;
	console.log(body);
	const data = await tracksModel.create(body);
	res.send({ data });
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

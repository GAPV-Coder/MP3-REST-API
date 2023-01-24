const { PaginationParameters } = require("mongoose-aggregate-paginate-v2");

const getParams = req => {
	return new PaginationParameters(req).get();
};

module.exports = getParams;

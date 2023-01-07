const mongoose = require("mongoose");

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("DB Connection Successful!");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("disconnected", () => {
	console.log("Sorry, an error occurred with the DB connection!");
});

mongoose.set("strictQuery", true);

module.exports = dbConnection;

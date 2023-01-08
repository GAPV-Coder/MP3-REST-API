require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/mongo.js");
const app = express();

app.use(cors());
app.use(express.json());

/**
 * API Rest Routes
 */
app.use("/api", require("./routes"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server on port ${port}`);
});

dbConnection();

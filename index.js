const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const members = require("./public/Members");

const app = express();

//Make a simple REST API

//Init middleware
app.use(logger);

//Gets all members
app.get("/api/members", (req, res) => res.json(members));

//Set Static Folder for Static Server
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

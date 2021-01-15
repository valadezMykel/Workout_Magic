const express = require("express")
const mongoose = require('mongoose')
const logger = require("morgan");

const app = express()
app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./controller/htmlRoutes")(app);
require("./controller/apiRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false })

const PORT = process.env.PORT || 4400;

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});
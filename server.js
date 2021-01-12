const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./controller/htmlRoutes")(app);
require("./controller/apiRoutes")(app);

const PORT = process.env.PORT || 4400;

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});
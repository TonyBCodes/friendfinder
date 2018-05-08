var express = require("express");
//var bodyParser = require("body-parser");
//require("path");

var app = express();

var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
//app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});
var express = require("express");
//var bodyParser = require("body-parser");
//require("path");

var app = express();

var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
//app.use(bodyParser.json());

// Import routes and give the server access to them.
// var routes = require("./app/routing/htmlRoutes.js");

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//app.use(routes);

//app.get("*", function (req, res) {
//    res.send("home");
//});

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});

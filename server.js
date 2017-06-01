// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// when a client reaches localhost:63342/ then we return or "send" the home.html file to be displayed


app.get("/",function(req,res){

   res.sendFile(path.join(__dirname,"app/public/home.html"));

});

/// start listener

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
// Import dependencies 
var express = require("express");

var router = express.router();

// import burger.js file database
var burger = require("./burger.js");

// Routes 
router.get("/", function (req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers:data 
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req,res){
    burger.create([
        ""
    ]);
});




module.exports = router; 
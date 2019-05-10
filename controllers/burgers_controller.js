// Import dependencies 
var express = require("express");

var router = express.router();

// import burger.js file database
var burger = require("../models/burger");

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
        "buger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({id: result.insertId});
    });
});

router.put("api/burger:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0){
            // if no change 404 error page doesnt exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.exports = router; 
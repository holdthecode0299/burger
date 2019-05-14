// Import dependencies 
var express = require("express");

var router = express.Router();

// import burger.js file database
var burger = require("../models/burger.js");

// Routes 
router.get("/", function (req, res){
    console.log("in here")
    burger.all(function(data){
        var hbsObject = {
            burgers:result
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res){
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

router.delete("api/burger/:id", function(req, res){
    var condition = "id = + req.params.id";

    burger.delete(condition, function(result){
        if (result.affectedRows == 0){
            return res.status(404).end();
        } else {
            res.staus(200).end();
        }
    });
});


module.exports = router; 
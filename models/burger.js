// import orm 
var orm = require("../config/orm");

    var burgers = {

        all: function(cb){
            console.log("in burger")
            orm.selectAll("burgers", function(res){
                console.log(res)
                cb(res);
            });
            },

        insert: function(table, burgerName, devoured, cb){
            orm.insertOne("burgers", table, burgerName, devoured, cb, function(res){
                cb(res);
            });
            },

        update: function(table, id, cb){
            orm.updateOne("burgers", table, id, cb, function(res){
                cb(res);
            });
            },

    };
// export database for controller
module.exports = burgers; 
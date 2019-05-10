// import orm 
var orm = require("../config/orm");

    var burgers = {

        all: function(cb){
            orm.selectAll("burgers", function(res){
                cb(res);
            });
            },

        insert: function(newEntry, cb){
            orm.insertOne("burgers", function(res){
                cb(res);
            });
            },

        update: function(cb){
            orm.updateOne("burgers",function(res){
                cb(res);
            });
            },

    };
// export database for controller
module.exports = burgers; 
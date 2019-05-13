var connection = require("./connection");

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, cb], function(err,result){
            if(err) throw err;
            cb(data);
        });
    },

    insertOne:function(table, burgerName, devoured, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [table, burgerName, devoured, cb], function(err, result){
            if(err)throw err;
            cb(data)
        });
    },

    updateOne:function(table, id, cb){
        var queryString ="UPDATE ?? SET devoured = 1 WHERE id = ?"
        connection.query(queryString,[table, id, cb], function(err, result){
            if(err)throw err;
            cb(data)
        });
    },
};

module.exports = orm;
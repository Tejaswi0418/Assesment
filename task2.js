var mysql =require('mysql');
const Query = require('mysql/lib/protocol/sequences/Query');
 var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:""
    

 });
 con.connect(function(err){
if(err) throw err;
    console.log("conncetion is done");
    con.query("CREATE DATABASE mydb2",function(err,result){
    if(err) throw err;
    console.log("Database created");
    })
  })
 
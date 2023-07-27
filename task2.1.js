var mysql =require('mysql');
const Query = require('mysql/lib/protocol/sequences/Query');
 var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"",
    database:"mydb2"
    
 });
 con.connect(function(err){
if(err) throw err;
 var sql3 = "Create table employees(id Primary Key, name VARCHAR(255), department VARCHAR(100),salary (DECIMAL, 10, 2)";  
con.query(sql3,function(err,result){

   if(err) throw err;
   console.log("Table created");
    })
  })
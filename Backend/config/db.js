const mysql = require("mysql");
require('dotenv').config()
let pass=process.env.PASSWORD
let db_con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: pass
});

db_con.connect((err)=>{
    if(err){
        console.log("Error getting to connect db",err);
    }
    else{
        console.log("connected to db successfuly!");
    }
})

module.exports={
    db_con
}
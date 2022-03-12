const mysql = require('mysql');

// const mysqlConnection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : 'KOALA@96',
//     database : 'deepdaem_web_admin'
// });


///BD HOSTING HEROKU

const mysqlConnection = mysql.createConnection("mysql://bf89de34dbf2ae:7d61accb@us-cdbr-east-05.cleardb.net/heroku_d00365fbcf5102b?reconnect=true");

/*BD EN HOSTING HOSPEDANDO*/

// const mysqlConnection = mysql.createConnection({
//     host : 'deepdaemon.org',
//     user : 'deepdae1_admin',
//     password : 'D33pD43monC1C2022',
//     database : 'deepdae1_adminweb'
    
// });

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
    }else{
        console.log('Conexion exitosa a la BD');
    }  
});

mysqlConnection.on('error', function(err) {
    console.log(err.code);
  });


module.exports = mysqlConnection;

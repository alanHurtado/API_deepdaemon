const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host : 'us-cdbr-east-05.cleardb.net',
    user : 'b63b479c2bd710',
    password : '1a256d73',
    database : 'heroku_00e8da110b6cd01'
});

/*BD EN HOSTING*/

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

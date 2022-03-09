const mysql = require('mysql');

// const mysqlConnection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : 'KOALA@96',
//     database : 'deepdaem_web_admin'
// });

/*BD EN HOSTING*/

const mysqlConnection = mysql.createConnection({
    host : 'us-cdbr-east-05.cleardb.net',
    user : 'b63b479c2bd710',
    password : '1a256d73',
    database : 'heroku_00e8da110b6cd01'
    
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
    }else{
        console.log('Conexion exitosa a la BD');
    }  
});


module.exports = mysqlConnection;

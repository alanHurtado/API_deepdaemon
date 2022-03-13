const mysqlDriver = require('mysql');

// BD Local 
// const config = {
//     host : 'localhost',
//     user : 'root',
//     password : 'KOALA@96',
//     database : 'deepdaem_web_admin'
// });

/*BD EN HOSTING HOSPEDANDO*/

const config = {
    host : 'deepdaemon.org',
    user : 'deepdae1_admin',
    password : 'D33pD43monC1C2022',
    database : 'deepdae1_adminweb'  
};

//prueba tabla en heroku
//const config="mysql://bf89de34dbf2ae:7d61accb@us-cdbr-east-05.cleardb.net/heroku_d00365fbcf5102b?reconnect=true";

  
var mysqlConnection = mysqlDriver.createConnection(config);

// mysqlConnection.connect(function (err) {
//     if(err) {
//         console.log(err);
//     }else{
//         console.log('Conexion exitosa a la BD');
//     }  
// });

// mysqlConnection.on('error', function(err) {
//     console.log(err.code);
//   });



function handleDisconnect(conn) {
    console.log('Conexion exitosa a la BD');
    
    conn.on('error', function(err) {
        if (!err.fatal) {      
              return;
          }
        if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
            throw err;
          }
          console.log('Re-connecting lost connection: ' + err.stack);
          mysqlConnection = mysqlDriver.createConnection(config);
          handleDisconnect(mysqlConnection);
          mysqlConnection.connect();
      });
  }
handleDisconnect(mysqlConnection);

module.exports = mysqlConnection;
const sql = require('mssql')

//'mssql://User:Password@ComputerName/\Instance/DatabaseName'
//Following example:
// const config = 'mssql://SA:Sambamba-1234@localhost/\SA/KegoyeBHS';
const config = {
    server: 'localhost',
    port: 1401,
    user: "SA",
    password: "Sambamba-1234",
    connectionLimit: 10, //mysql connection pool length
    database: "KegoyeBHS",
    options: {
        // encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
  };
  

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};
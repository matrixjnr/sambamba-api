const { poolPromise } = require('../config/database')

// get username and password from request body and check if it is valid
// if valid, create a jwt token, save the token as 'token' cookie and return the user
// else return 401 status code

exports.authenticate = async (req, res) => {
    const { username, password } = req.body
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query('SELECT Username, Password FROM dbo.tuser WHERE username = \'' + username + '\' AND password = \'' + password + '\'');
    // const user = rs.recordset[0]

    return rs.recordset
}
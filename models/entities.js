const { poolPromise } = require('../config/database')


exports.loadMarksByYearTermStreamAndSub = async (req, res) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query('SELECT * FROM dbo.vwExamResult WHERE ayr = \'' + req.body.ayr + '\' AND term = \'' + req.body.term + '\' AND exam = \'' + req.body.cycle + '\' AND strm = \'' + req.body.stream + '\' AND sub = \'' + req.body.sub + '\'');
    // console.log(rs.recordset)
    return rs.recordset;
}

// update a single record marks into CAT1 table for a student
exports.insertMarks = async (req, res) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query('UPDATE KegoyeBHS.dbo.CAT1 SET mks = \'' + req.body.mks + '\' WHERE AdmNo = \'' + req.body.AdmNo + '\' AND aYr = \'' + req.body.aYr + '\' AND Term = \'' + req.body.Term + '\' AND Sub = \'' + req.body.Sub + '\' AND Exam = \'' + req.body.Exam + '\'')
    // console.log(rs.recordset)
    return rs.recordset;
}

exports.loadYear = async (req, res) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query('SELECT cay FROM dbo.cay');

    return rs.recordset;
}

exports.loadTerm = async (req, res) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query('SELECT term FROM dbo.term WHERE ct=1');

    return rs.recordset;
}

exports.loadStream = async (req, res) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query('SELECT stream FROM dbo.stream');

    return rs.recordset;
}

exports.loadSub = async (req, res) => {
    const { strm } = req.body
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query('SELECT subCode, subname FROM dbo.vwSTRMTSUB WHERE strm=\'' + strm + '\'');

    return rs.recordset;
}

exports.loadClass = async (req, res) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query('SELECT form,class FROM dbo.class');

    return rs.recordset;
}

exports.loadForm = async (req, res) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query('SELECT form FROM dbo.form');

    return rs.recordset;
}

exports.loadExam = async (req, res) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query('SELECT exam FROM dbo.exam');

    return rs.recordset;
}
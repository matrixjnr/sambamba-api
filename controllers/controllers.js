const Operations = require('../models/entities');
const UserOps = require('../models/user');

exports.loadMarks = async (req, res) => {
    const data = await Operations.loadMarksByYearTermStreamAndSub(req, res);

    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: 'No data found' });
    }
}

exports.insertMarks = async (req, res) => {
    const data = await Operations.insertMarks(req, res);
    res.status(200).json({ message: 'Marks inserted successfully' });
}

exports.loadYear = async (req, res) => {
    const data = await Operations.loadYear(req, res);

    if (data[0]) {
        res.status(200).json(data[0]);
    } else {
        res.status(404).json({ message: 'No data found' });
    }
}

exports.loadTerm = async (req, res) => {
    const data = await Operations.loadTerm(req, res);

    if (data[0]) {
        res.status(200).json(data[0]);
    } else {
        res.status(404).json({ message: 'No data found' });
    }
}

exports.loadStream = async (req, res) => {
    const data = await Operations.loadStream(req, res);

    if (data[0]) {
        res.status(200).json(data[0]);
    } else {
        res.status(404).json({ message: 'No data found' });
    }
}

exports.loadSub = async (req, res) => {
    const data = await Operations.loadSub(req, res);

    if (data[0]) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: 'No data found' });
    }
}

exports.loadClass = async (req, res) => {
    const data = await Operations.loadClass(req, res);

    if (data[0]) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: 'No data found' });
    }
}

exports.loadForm = async (req, res) => {
    const data = await Operations.loadForm(req, res);

    if (data[0]) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: 'No data found' });
    }
}

exports.loadExam = async (req, res) => {
    const data = await Operations.loadExam(req, res);

    if (data[0]) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: 'No data found' });
    }
}

exports.loadUser = async (req, res) => {
    const data = await UserOps.authenticate(req, res);
    const result = await data[0];
    // console.log(result);
    if (result) {
        // check if username and password match
        if (result.Username === req.body.username && result.Password === req.body.password) {
            // authentication successful
            res.status(200).json({ message: 'Authentication successful' });
        } else {
            res.status(404).json({ message: 'Wrong User or Password!' });
        }
    } else {
        res.status(404).json({ message: 'Wrong User or Password!' });
    }
}
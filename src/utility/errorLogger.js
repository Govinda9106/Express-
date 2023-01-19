const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const validator = {};

//promisifying append file in below linw by calling promisify
const appendFile = promisify( fs.appendFile );

validator.errorLogger =  async (err, req, res, next) =>{
    if(err){
        const data = `message: ${ err.message } - path: ${err.path}\n`
        await appendFile('errorlog.log', data);
        res.status(err.status || 500).json({ message: err.message, status: 'Oops!' })
    }
};

validator.invalidRoutes = (req, res, next) => {
    let err = new Error('Invalid Routes');
    err.status = 500;
    err.path = path.join(__filename);
    next(err);
};

module.exports = validator;
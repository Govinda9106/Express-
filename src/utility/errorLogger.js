const fs = require('fs');
const path = require('path');

const validator = {};

validator.errorLogger = (err, req, res, next) =>{
    if(err){
        const data = `message: ${ err.message } - path: ${err.path}\n`
        fs.appendFile('errorlog.log', data, (err) => {
            if(err){
                console.log('Logging Failed');
            }
        })
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
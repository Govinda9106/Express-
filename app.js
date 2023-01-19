const fs = require('fs');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const router = require('./src/routes/express.route');
const validator = require('./src/utility/errorLogger');



const app = express();

app.use(helmet());

app.use(morgan('combined',{
    stream: fs.createWriteStream('morgan.log', { flags: 'a' }),
}));
app.use('/',(req, res,next)=>{
    console.log('thanos');
    next()
})

app.use('/', router);
app.use(validator.invalidRoutes);
app.use(validator.errorLogger);

module.exports = app;
const express = require('express');
const expressController = require('./express.controller');

const router = express.Router();

// router.post('*', expressController.getHome);
router.post('*',(req, res)=>{
    console.log('podt');
})

router.all('*',(req, res)=>{
    console.log('all');
})

router.put('/home',(req, res)=>{
    console.log('put');
})



// router.route('/choice').get((req, res,next)=>{
//     console.log('Snake and ladder');
//     res.send('hello')
//     // next();
//     console.log('adain get');
//     //res.send('grom get')
// }).put((req, res,next)=>{
//     next();
//     console.log('Candy');
// }).all((req, res,next)=>{
//     console.log('pubg');
//     // next();
//     console.log('from all');
//     // res.send('ukyfku');
// })

module.exports = router;
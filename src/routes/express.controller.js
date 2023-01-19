exports.getHome = (req, res, next) => {
    if(true){
        const err = new Error('Error Occured!!');
        err.status = 500;
        return next(err)
    }
    res.send('Hello Home')
};
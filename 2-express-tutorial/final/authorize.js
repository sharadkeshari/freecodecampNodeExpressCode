const authorize = (req, res, next) => {
    console.log('authorize')
    if (req.query.user == 'john') {
        req.user = { name: 'john', id: 3 }
        next();
    }
    else {
        res.status(401).send('Not authorized')
    }

}


module.exports.authorization = authorize
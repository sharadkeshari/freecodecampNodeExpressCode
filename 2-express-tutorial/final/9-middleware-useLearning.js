const express = require('express')
const logger = require('./logger')
const { authorization } = require('./authorize')
const morgan = require('morgan')

const app = express();

//request => middleware => response
//own middleware
app.use('/api', [logger, authorization]);
//multiple middlewares can be put in an array
//applies the logger the path that is having anything after the given path

//order matters in the case of middlewares

//putting middlewares through app.use
// putting middlewares through the app routes
//e.g.  
//app.get('/about', [logger, authorization], (req, res) => {
//})
//1. use vs route
// 2. options - our own/ express/ third party

//express middleware
//app.use(express.static('../public'));

//third party middleware

app.use(morgan('tiny'))



app.get('/', (req, res) => {
    res.send("Home");
})

app.get('/about', [logger, authorization], (req, res) => {
    res.send("About");
    console.log(req.user)
})

app.get('/api/products', (req, res) => {
    res.send("Products");
    console.log('usrs ', req.user)
})

app.get('/api/items', (req, res) => {
    res.send("Items");

})


app.listen(5000, () => {
    console.log("server is listening to the port 5000");
});
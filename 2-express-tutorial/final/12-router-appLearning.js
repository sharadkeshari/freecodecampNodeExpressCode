const { response } = require('express');
const express = require('express')
const app = express();
const { peopleRouter } = require('./routes/people');
const { authoriser } = require('./routes/authorizer')

//static assets
app.use(express.static('../methods-public'));

//parse incoming from data
app.use(express.urlencoded({ extended: false }));

//parse incoming json data in post
app.use(express.json());

app.use('/api/people', peopleRouter);

app.use('/login', authoriser);




app.listen(5000, () => {
    console.log('listening to port number 5000...');
})
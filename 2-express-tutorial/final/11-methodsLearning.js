const { response } = require('express');
const express = require('express')
const app = express();

let { people } = require('../data');

//static assets
app.use(express.static('../methods-public'));

//parse incoming from data
app.use(express.urlencoded({ extended: false }));

//parse incoming json data in post
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).send({ success: true, data: people });
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name value." })
    }
    res.status(201).send({ success: true, person: name });
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: " please provide the name value postman." })
    }
    res.status(200).send({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`welcome ${name}`);
    }
    res.status(401).send("Please provide credentials.");
})

app.put('/api/people/:id', (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    //const peopletoChange
    const personRequired = people.find(person => person.id === Number(id));
    if (!personRequired) {
        return res.status(404).json({ success: false, msg: `no person with id ${id} found` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).send({ success: true, person: newPeople });
    console.log(name, id);
})

app.delete('/api/people/:id',(req, res)=>{
    const id=req.params.id;
    const personRequired = people.find(person => person.id === Number(id));
    if (!personRequired) {
        return res.status(404).json({ success: false, msg: `no person with id ${id} found` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
      )
    res.status(200).send({ success: true, person: newPeople });
    console.log(name, id);
})


app.listen(5000, () => {
    console.log('listening to port number 5000...');
})

let { people } = require('../../data');

const getPeople = (req, res) => {
    res.status(200).send({ success: true, data: people });
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name value." })
    }
    res.status(201).send({ success: true, person: name });
}


const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: " please provide the name value postman." })
    }
    res.status(200).send({ success: true, data: [...people, name] })
}


const updatePerson = (req, res) => {
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
}


const deletePerson = (req, res) => {
    const id = req.params.id;
    const personRequired = people.find(person => person.id === Number(id));
    if (!personRequired) {
        return res.status(404).json({ success: false, msg: `no person with id ${id} found` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    res.status(200).send({ success: true, person: newPeople });
    // console.log(name, id);
}

module.exports.peopleController = { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson }
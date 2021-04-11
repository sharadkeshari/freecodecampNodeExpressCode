const express = require('express');

const peopleRoute = express.Router();
const { peopleController } = require('../controllers/peopleController')



// peopleRoute.get('/', peopleController.getPeople)
// peopleRoute.post('/', peopleController.createPerson)
// peopleRoute.post('/postman', peopleController.createPersonPostman)
// peopleRoute.put('/:id', peopleController.updatePerson)
// peopleRoute.delete('/:id', peopleController.deletePerson)



///above thigs can also be written like this
peopleRoute.route('/').get(peopleController.getPeople).post(peopleController.createPerson)
peopleRoute.route('/postman').post(peopleController.createPersonPostman)
peopleRoute.route('/:id').put(peopleController.updatePerson).delete(peopleController.deletePerson);



module.exports.peopleRouter = peopleRoute
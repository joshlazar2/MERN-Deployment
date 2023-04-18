const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api/allPets', PetController.findAllPets);
    app.post('/api/createPet', PetController.createPet);
    app.get('/api/findPet/:id', PetController.findOnePet);
    app.put('/api/updatePet/:id', PetController.updatePet);
    app.delete('/api/deletePet/:id', PetController.deletePet);
}
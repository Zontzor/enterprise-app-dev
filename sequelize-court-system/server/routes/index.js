const judgesController = require('../controllers').judges;
const CourtRoomController = require('../controllers').courtrooms;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/judges', judgesController.list);
  app.post('/api/judges', judgesController.create);
  app.get('/api/judges/:id', judgesController.retrieve);
  app.put('/api/judges/:id', judgesController.update);
  app.delete('/api/judges/:id', judgesController.destroy)
  
  app.post('/api/courtrooms', CourtRoomController.create);
  app.get('/api/courtrooms', CourtRoomController.list);
  app.get('/api/courtrooms/:id', CourtRoomController.retrieve);
  app.put('/api/courtrooms/:id', CourtRoomController.update);
  app.delete('/api/courtrooms/:id', CourtRoomController.destroy)
};
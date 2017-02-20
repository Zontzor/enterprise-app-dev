const judgesController = require('../controllers').judges;
const CourtRoomController = require('../controllers').courtrooms;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/judges', judgesController.create);
  app.get('/api/judges', judgesController.list);
  
  app.post('/api/courtrooms', CourtRoomController.create);
  app.get('/api/courtrooms', CourtRoomController.list);
};
const judgesController = require('../controllers').judges;
const CourtRoomController = require('../controllers').courtrooms;
const ParticipantController = require('../controllers').participants;
const CaseController = require('../controllers').cases;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Courts API!',
  }));

  app.get('/api/judges', judgesController.list);
  app.post('/api/judges', judgesController.create);
  app.get('/api/judges/:id', judgesController.retrieve);
  app.put('/api/judges/:id', judgesController.update);
  app.delete('/api/judges/:id', judgesController.destroy);
  
  app.post('/api/courtrooms', CourtRoomController.create);
  app.get('/api/courtrooms', CourtRoomController.list);
  app.get('/api/courtrooms/:id', CourtRoomController.retrieve);
  app.put('/api/courtrooms/:id', CourtRoomController.update);
  app.delete('/api/courtrooms/:id', CourtRoomController.destroy);
  
  app.post('/api/participants', ParticipantController.create);
  app.get('/api/participants', ParticipantController.list);
  app.get('/api/participants/:id', ParticipantController.retrieve);
  app.put('/api/participants/:id', ParticipantController.update);
  app.delete('/api/participants/:id', ParticipantController.destroy);
  
  app.post('/api/cases', CaseController.create);
  app.get('/api/cases', CaseController.list);
  app.get('/api/cases/:id', CaseController.retrieve);
  app.put('/api/cases/:id', CaseController.update);
  app.delete('/api/cases/:id', CaseController.destroy);
};
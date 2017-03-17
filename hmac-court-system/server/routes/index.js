const judgesController = require('../controllers').judges;
const CourtRoomController = require('../controllers').courtrooms;
const ParticipantController = require('../controllers').participants;
const CaseController = require('../controllers').cases;
const UserController = require('../controllers').users;
const CryptoJS = require('crypto-js'); 

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Courts API!',
  }));
  
  // route middleware to verify a token
  app.use((req, res, next) => {
    var hmac = req.get('authorization');
    
    if (hmac) {
      var secret = 'Monkey';
      var accesskey = 'mysupersecretkey';
      var body = req.body;
      var stuff = accesskey + body;
      var hash = CryptoJS.HmacSHA256(stuff, secret);
      var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
      
      console.log("client hash: " + req.get('authorization'));
      console.log("client body: " + req.body);  
      console.log("server hash: " + hashInBase64);
      
      if (hmac == hashInBase64) {
        next();
      } else {
        return res.status(401).send({ 
            success: false, 
            message: 'Failed to authenticate hmac.' 
        });   
      }
      
    } else {
      return res.status(403).send({ 
          success: false, 
          message: 'No hmac provided' 
      });
    }
  });

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

  app.post('/api/users', UserController.create);
  app.get('/api/users', UserController.list);
  app.get('/api/users/:id', UserController.retrieve);
  app.put('/api/users/:id', UserController.update);
  app.delete('/api/users/:id', UserController.destroy);
};

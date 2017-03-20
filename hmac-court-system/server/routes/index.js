const judgesController = require('../controllers').judges;
const CourtRoomController = require('../controllers').courtrooms;
const ParticipantController = require('../controllers').participants;
const CaseController = require('../controllers').cases;
const UserController = require('../controllers').users;
const AuthenticationController = require('../controllers').authenticate;
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require('../models').User;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Courts API!',
  }));

  app.get('/api/login', AuthenticationController.login);

  // route middleware to verify hash
  app.use((req, res, next) => {
    var hmac = req.get('hmac');
    var accessKey = req.get('x-access-key');

    if (hmac) {
      var parsedAccessKey = CryptoJS.enc.Utf8.parse(accessKey);
      var accessKeyBase64 = CryptoJS.enc.Base64.stringify(parsedAccessKey);

      User.findOne({
        where: {access_key: accessKeyBase64}
      }).then(function(user) {
        var secretKeybase64 = user.secret_key;
        var parsedSecretKey = CryptoJS.enc.Base64.parse(secretKeybase64);
        var secretKey = parsedSecretKey.toString(CryptoJS.enc.Utf8);

        var body = req.body;
        var payload = accessKey + body;
        var hash = CryptoJS.HmacSHA256(payload, secretKey);
        var hashBase64 = CryptoJS.enc.Base64.stringify(hash);

        if (hmac == hashBase64) {
          next();
        } else {
          return res.status(401).send({
              success: false,
              message: 'Failed to authenticate hmac'
          });
        }
      })
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

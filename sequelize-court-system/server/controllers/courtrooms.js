const CourtRoom = require('../models').CourtRoom;

module.exports = {
  create(req, res) {
    return CourtRoom
      .create({
        number: req.body.number,
      })
      .then(courtroom => res.status(201).send(courtroom))
      .catch(error => res.status(400).send(error));
  },
  
  list(req, res) {
    return CourtRoom
      .all()
      .then(courtrooms => res.status(200).send(courtrooms))
      .catch(error => res.status(400).send(error));
  },
};
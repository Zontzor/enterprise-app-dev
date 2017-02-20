const Judge = require('../models').Judge;

module.exports = {
  create(req, res) {
    return Judge
      .create({
        name: req.body.name,
        room: req.body.room,
        ext: req.body.ext,
      })
      .then(judge => res.status(201).send(judge))
      .catch(error => res.status(400).send(error));
  },
  
  list(req, res) {
    return Judge
      .all()
      .then(judges => res.status(200).send(judges))
      .catch(error => res.status(400).send(error));
  },
};
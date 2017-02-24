const Judge = require('../models').Judge;

module.exports = {
  list(req, res) {
    return Judge
      .all()
      .then(judges => res.status(200).send(judges))
      .catch(error => res.status(400).send(error));
  },
  
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
  
  retrieve(req, res) {
  return Judge
    .findById(req.params.id)
    .then(judge => {
      if (!judge) {
        return res.status(404).send({
          message: 'Judge Not Found',
        });
      }
      return res.status(200).send(judge);
    })
    .catch(error => res.status(400).send(error));
  },
  
  update(req, res) {
  return Judge
    .findById(req.params.id)
    .then(judge => {
      if (!judge) {
        return res.status(404).send({
          message: 'Judge Not Found',
        });
      }
      return judge
        .update({
          name: req.body.name || judge.name,
          room: req.body.room || judge.room,
          ext: req.body.ext || judge.ext,
        })
        .then(() => res.status(200).send(judge))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
  
  destroy(req, res) {
    return Judge
      .findById(req.params.id)
      .then(judge => {
        if (!judge) {
          return res.status(400).send({
            message: 'Judge Not Found',
          });
        }
        return judge
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
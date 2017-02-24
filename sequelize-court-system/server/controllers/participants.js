const Participant = require('../models').Participant;

module.exports = {
  list(req, res) {
    return Participant
      .all()
      .then(participants => res.status(200).send(participants))
      .catch(error => res.status(400).send(error));
  },
  
  create(req, res) {
    return Participant
      .create({
        name: req.body.name,
        address: req.body.address,
        type: req.body.type,
      })
      .then(participant => res.status(201).send(participant))
      .catch(error => res.status(400).send(error));
  },
  
  retrieve(req, res) {
  return Participant
    .findById(req.params.id)
    .then(participant => {
      if (!participant) {
        return res.status(404).send({
          message: 'Participant Not Found',
        });
      }
      return res.status(200).send(participant);
    })
    .catch(error => res.status(400).send(error));
  },
  
  update(req, res) {
  return Participant
    .findById(req.params.id)
    .then(participant => {
      if (!participant) {
        return res.status(404).send({
          message: 'Participant Not Found',
        });
      }
      return participant
        .update({
          name: req.body.name || participant.number,
          address: req.body.address || participant.address,
          type: req.body.type || participant.type,
        })
        .then(() => res.status(200).send(participant))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
  
  destroy(req, res) {
    return Participant
      .findById(req.params.id)
      .then(participant => {
        if (!participant) {
          return res.status(400).send({
            message: 'Participant Not Found',
          });
        }
        return participant
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
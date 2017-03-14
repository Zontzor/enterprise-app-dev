const CourtRoom = require('../models').CourtRoom;

module.exports = {
  list(req, res) {
    return CourtRoom
      .all()
      .then(courtrooms => res.status(200).send(courtrooms))
      .catch(error => res.status(400).send(error));
  },
  
  create(req, res) {
    return CourtRoom
      .create({
        number: req.body.number,
      })
      .then(courtroom => res.status(201).send(courtroom))
      .catch(error => res.status(400).send(error));
  },
  
  retrieve(req, res) {
  return CourtRoom
    .findById(req.params.id)
    .then(courtroom => {
      if (!courtroom) {
        return res.status(404).send({
          message: 'Court Room Not Found',
        });
      }
      return res.status(200).send(courtroom);
    })
    .catch(error => res.status(400).send(error));
  },
  
  update(req, res) {
  return CourtRoom
    .findById(req.params.id)
    .then(courtroom => {
      if (!courtroom) {
        return res.status(404).send({
          message: 'Court Room Not Found',
        });
      }
      return courtroom
        .update({
          number: req.body.number || courtroom.number,
        })
        .then(() => res.status(200).send(courtroom))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
  
  destroy(req, res) {
    return CourtRoom
      .findById(req.params.id)
      .then(courtroom => {
        if (!courtroom) {
          return res.status(400).send({
            message: 'Court Room Not Found',
          });
        }
        return courtroom
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
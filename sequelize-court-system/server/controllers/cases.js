const Case = require('../models').Case;

module.exports = {
  list(req, res) {
    return Case
      .all()
      .then(cases => res.status(200).send(cases))
      .catch(error => res.status(400).send(error));
  },
  
  create(req, res) {
    Case.count({
      where: {courtroom_id: req.body.courtroom_id}
    })
    .then(function(count) {
      console.log(count);
      if (count === 0) {
        return Case
          .create({
            judge_id: req.body.judge_id,
            courtroom_id: req.body.courtroom_id,
            claimant_id: req.body.claimant_id,
            respondent_id: req.body.respondent_id,
            start_date: req.body.start_date,
            duration: req.body.duration,
            result: req.body.result,
          })
          .then(legalcase => res.status(201).send(legalcase))
          .catch(error => res.status(400).send(error));
      } else {
        return res.status(400).send({
          message: 'Court Room Allocated',
        });
      }
    })
  },
  
  retrieve(req, res) {
  return Case
    .findById(req.params.id)
    .then(legalcase => {
      if (!legalcase) {
        return res.status(404).send({
          message: 'Case Not Found',
        });
      }
      return res.status(200).send(legalcase);
    })
    .catch(error => res.status(400).send(error));
  },
  
  update(req, res) {
  return Case
    .findById(req.params.id)
    .then(legalcase => {
      if (!legalcase) {
        return res.status(404).send({
          message: 'Case Not Found',
        });
      }
      return legalcase
        .update({
          start_date: req.body.start_date || legalcase.start_date,
          duration: req.body.duration || legalcase.duration,
          result: req.body.result || legalcase.result,
        })
        .then(() => res.status(200).send(legalcase))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
  
  destroy(req, res) {
    return Case
      .findById(req.params.id)
      .then(legalcase => {
        if (!legalcase) {
          return res.status(400).send({
            message: 'Case Not Found',
          });
        }
        return legalcase
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
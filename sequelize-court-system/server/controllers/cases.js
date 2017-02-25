const Case = require('../models').Case;

module.exports = {
  list(req, res) {
    return Case
      .all()
      .then(cases => res.status(200).send(cases))
      .catch(error => res.status(400).send(error));
  },
};
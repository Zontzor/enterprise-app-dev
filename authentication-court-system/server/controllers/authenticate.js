const User = require('../models').User;
const jwt = require('jsonwebtoken');

module.exports = {

  login(req, res) {
    User
      .findOne({
        where: {username: req.body.username},
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }

        sequelize
          .query("select (:hashed_password = crypt(:password, :hashed_password)) as match",
            { replacements: { password: req.body.password, hashed_password: user.hashed_password },
            type: sequelize.QueryTypes.SELECT })
          .then(row => {
            console.log(row[0].match);
            if (row[0].match != true) {
              return res.status(401).send({
                message: 'Password Not Correct',
              });
            }

            console.log("Creating token");
            var token = jwt.sign({ user: user.id }, 'Monkey', { expiresIn: 1440 });

            return res.status(200).send({
              userid: user.id,
              expires: 1440,
              token: token
            });
          });


      })
      .catch(error => res.status(400).send(error));
    },

}

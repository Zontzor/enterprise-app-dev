const User = require('../models').User;

module.exports = {
  list(req, res) {
    return sequelize
      .query("select * from users", { type: sequelize.QueryTypes.SELECT})
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  
  create(req, res) {
    return sequelize
      .query(
        "insert into users (username, hashed_password, \"createdAt\", \"updatedAt\") values (:username, crypt(:password, gen_salt('bf', 8)), :createdAt, :updatedAt)", 
        { replacements: { username: req.body.username, password: req.body.password, createdAt: new Date(), updatedAt: new Date() }, 
        type: sequelize.QueryTypes.INSERT })
      .then(user => res.status(201).send("Success"))
      .catch(error => res.status(400).send(error));
  },
  
  retrieve(req, res) {
  return User
    .findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      return res.status(200).send(user);
    })
    .catch(error => res.status(400).send(error));
  },
  
  update(req, res) {
  return User
    .findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      return user
        .update({
          username: req.body.username || user.username,
          hashed_password: req.body.password || user.hashed_password
        })
        .then(() => res.status(200).send(user))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
  
  destroy(req, res) {
    return User
      .findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
}
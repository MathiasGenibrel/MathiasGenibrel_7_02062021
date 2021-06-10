const db = require("../models");
const Users = db.users;

exports.create = (req, res) => {
  if (!req.body.name || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const user = {
    name: req.body.name,
    password: req.body.password,
    desc: req.body.desc,
  };

  Users.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

exports.findAll = (req, res) => {
  Users.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving user.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Users.findByPk(id, {
    attributes: {
      exclude: ["password"],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Users.update(req.body, {
    where: { id },
  })
    .then((execute) => {
      if (execute == 1 ) {
        return res.send({
          message: "User was updated successfully.",
        });
      }

      res.send({
        message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating user with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Users.destroy({
    where: { id },
  })
    .then((execute) => {
      if (execute == 1) {
        return res.send({
          message: "User was deleted successfully!",
        });
      }

      res.send({
        message: `Cannot delete user with id=${id}. Maybe user was not found!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user with id=" + id,
      });
    });
};
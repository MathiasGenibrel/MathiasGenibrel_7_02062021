const db = require("../models");
const Vote = db.votes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.vote) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const votes = {
    vote: req.body.vote,
  };

  Vote.create(votes)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the post.",
      });
    });
};

exports.findAll = (req, res) => {
  const user = req.query.user;
  let condition = user ? { title: { [Op.like]: `%${user}%` } } : null;

  Vote.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving post.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Vote.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving post with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Vote.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Post was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update post with id=${id}. Maybe post was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating post with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Vote.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Post was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete post with id=${id}. Maybe post was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete post with id=" + id,
      });
    });
};
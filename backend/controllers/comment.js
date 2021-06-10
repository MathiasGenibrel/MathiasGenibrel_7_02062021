const db = require("../models");
const Comments = db.comments;

exports.create = (req, res) => {
  if (!req.body.comment) {
    return res.status(400).send({
      message: "body cannot be empty!",
    });
  }
  if (!req.body.userId) {
    return res.status(400).send({
      message: "No userId was received",
    });
  }
  if (!req.query.id) {
    return res.status(400).send({
      message: "No id has been received !",
    });
  }

  const comment = {
    comment: req.body.comment,
    userId: req.body.userId,
    postId: req.query.id,
  };

  Comments.create(comment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the comment.",
      });
    });
};

exports.findAll = (req, res) => {
  Comments.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving comment.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Comments.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving comment with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Comments.update(req.body, {
    where: { id },
  })
    .then((execute) => {
      if (execute == 1) {
        return res.send({
          message: "Comment was updated successfully.",
        });
      }

      res.send({
        message: `Cannot update comment with id=${id}. Maybe comment was not found or req.body is empty!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating comment with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Comments.destroy({
    where: { id },
  })
    .then((execute) => {
      if (execute == 1) {
        return res.send({
          message: "Comment was deleted successfully!",
        });
      }

      res.send({
        message: `Cannot delete comment with id=${id}. Maybe comment was not found!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete comment with id=" + id,
      });
    });
};

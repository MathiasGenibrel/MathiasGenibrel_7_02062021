const db = require("../models");
const Posts = db.posts;

exports.create = (req, res) => {
  if (!req.body.text && !req.body.img_url) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.userId) {
    res.status(400).send({
      message: "No userId was received",
    });
    return;
  }

  const post = {
    text: req.body.text,
    img_url: req.body.img_url,
    userId: req.body.userId,
  };

  Posts.create(post)
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
  const orderPost = req.query.order ?? "DESC";

  Posts.findAll({
    order: [["createdAt", orderPost]],
    attributes: { exclude: ["userId"] },
    include: [
      {
        model: db.comments,
        attributes: ["comment", "createdAt", "updatedAt"],
        include: [
          {
            model: db.users,
            attributes: ["name", "desc", "role"],
          },
        ],
      },
      { model: db.users, attributes: ["name", "desc", "role"] },
    ],
  })
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

  Posts.findByPk(id, {
    attributes: { exclude: ["userId"] },
    include: [
      {
        model: db.comments,
        attributes: ["comment", "createdAt", "updatedAt"],
        include: [
          {
            model: db.users,
            attributes: ["name", "desc", "role"],
          },
        ],
      },
      { model: db.users, attributes: ["name", "desc", "role"] },
    ],
  })
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

  Posts.update(req.body, {
    where: { id },
  })
    .then((execute) => {
      if (execute == 1) {
        return res.send({
          message: "Post was updated successfully.",
        });
      }
      res.send({
        message: `Cannot update post with id=${id}. Maybe post was not found or req.body is empty!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating post with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Posts.destroy({
    where: { id },
  })
    .then((execute) => {
      if (execute == 1) {
        return res.send({
          message: "Post was deleted successfully!",
        });
      }

      res.send({
        message: `Cannot delete post with id=${id}. Maybe post was not found!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete post with id=" + id,
      });
    });
};

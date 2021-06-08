module.exports = (app) => {
  const Comments = require("../controllers/comment.js");

  let router = require("express").Router();

  router.post("/", Comments.create);

  router.get("/", Comments.findAll);
  router.get("/:id", Comments.findOne);

  router.put("/:id", Comments.update);

  router.delete("/:id", Comments.delete);

  app.use("/api/comments", router);
};

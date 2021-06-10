module.exports = (app) => {
  const Comments = require("../controllers/comment.js");

  const router = require("express").Router();

  router.post("/", Comments.create);

  router.get("/:id", Comments.findOne);
  router.get("/", Comments.findAll);

  router.put("/:id", Comments.update);

  router.delete("/:id", Comments.delete);

  app.use("/api/comments", router);
};

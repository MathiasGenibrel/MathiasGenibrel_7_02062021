const auth = require("../middleware/auth");

module.exports = (app) => {
  const Comments = require("../controllers/comment.js");

  const router = require("express").Router();

  router.post("/", auth, Comments.create);

  router.put("/:id", auth, Comments.update);

  router.delete("/:id", auth, Comments.delete);

  app.use("/api/comments", router);
};

module.exports = (app) => {
  const Posts = require("../controllers/posts.js");

  let router = require("express").Router();

  router.post("/", Posts.create);

  router.get("/", Posts.findAll);
  router.get("/:id", Posts.findOne);

  router.put("/:id", Posts.update);

  router.delete("/:id", Posts.delete);

  app.use("/api/posts", router);
};

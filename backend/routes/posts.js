module.exports = (app) => {
  const Posts = require("../controllers/posts.js");

  let router = require("express").Router();

  router.put("/:id/vote", Posts.userVote);
  router.post("/", Posts.create);

  router.get("/:id", Posts.findOne);
  router.get("/", Posts.findAll);  

  router.put("/:id", Posts.update);

  router.delete("/:id", Posts.delete);

  app.use("/api/posts", router);
};

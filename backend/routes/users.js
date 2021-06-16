const auth = require("../middleware/auth");

module.exports = (app) => {
  const users = require("../controllers/users.js");

  const router = require("express").Router();

  router.post("/login", users.login);
  router.post("/", users.create);

  router.get("/:id", auth, users.findOne);

  router.get("/", auth, users.findAll);

  router.put("/:id", auth, users.update);

  router.delete("/:id", auth, users.delete);

  app.use("/api/users", router);
};
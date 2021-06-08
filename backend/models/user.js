module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(128),
      allowNull: false,
    },
    desc: {
      type: Sequelize.STRING(64),
    },
    role: {
      type: Sequelize.ENUM("user", "admin"),
      defaultValue: "user",
    },
  });

  return User;
};

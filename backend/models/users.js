module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      validate: {
        notNull: true,
      },
    },
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
      //description
      type: Sequelize.STRING(64),
      defaultValue: "Nouveau",
    },
    role: {
      type: Sequelize.ENUM("user", "admin"),
      defaultValue: "user",
    },
  });

  return User;
};

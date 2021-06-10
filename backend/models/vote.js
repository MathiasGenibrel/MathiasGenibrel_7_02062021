module.exports = (sequelize, Sequelize) => {
  const Vote = sequelize.define("votes", {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      validate: {
        notNull: true,
      },
    },
    vote: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  });

  return Vote;
};

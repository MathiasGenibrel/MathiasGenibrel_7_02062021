module.exports = (sequelize, Sequelize) => {
  const Vote = sequelize.define("votes", {
    vote: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  });

  return Vote;
};

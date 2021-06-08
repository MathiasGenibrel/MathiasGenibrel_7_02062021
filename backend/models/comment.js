module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comments", {
    comment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    postId: {
      //foreignKey of posts table
      type: Sequelize.INTEGER,
      required: true,
      allowNull: false,
    },
    userId: {
      //foreignKey of posts table
      type: Sequelize.INTEGER,
      required: true,
      allowNull: false,
    },
  });

  return Comment;
};

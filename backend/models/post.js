module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    text: {
      type: Sequelize.STRING,
    },
    img_url: {
      type: Sequelize.STRING,
    },
    userId: {
      //foreignKey of posts table
      type: Sequelize.INTEGER,
      required: true,
      allowNull: false,
    },
  });

  return Post;
};

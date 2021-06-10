module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      validate: {
        notNull: true,
      },
    },
    text: {
      type: Sequelize.STRING,
    },
    imgUrl: {
      type: Sequelize.STRING,
    },
    userId: {
      //foreignKey of posts table
      type: Sequelize.UUID,
      required: true,
      allowNull: false,
    },
  });

  return Post;
};

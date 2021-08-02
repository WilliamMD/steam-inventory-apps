'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCart.belongsTo(models.User);
      UserCart.belongsTo(models.Game);
    }
  };
  UserCart.init({
    UserId: DataTypes.INTEGER,
    GameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCart',
  });
  return UserCart;
};
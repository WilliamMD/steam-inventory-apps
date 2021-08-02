'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Game, {through: 'models.UserCart'});
      User.hasMany(models.UserCart);
      User.belongsToMany(models.Game, {through: 'models.UserInventory'});
      User.hasMany(models.UserInventory);
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          message: 'Username cannot be empty!'
        },
        len: {
          args: [3, 20],
          message: 'Username must be between 3-20 characters!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          message: 'Password cannot be empty!'
        },
        len: {
          args: [8, 30],
          message: 'Password must be between 8-30 characters!'
        }
      }
    },
    avatar: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          args: true,
          message: 'Avatar must be in a url format!'
        }
      }
    },
    wallet: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          message: 'Wallet must be in a number format!'
        }
      }
    },
    deletedFlag: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [0],
          message: 'This variable only works as a flag (0 or 1)!'
        },
        max: {
          args: [1],
          message: 'This variable only works as a flag (0 or 1)!'
        },
      }
    }
  }, {
    hooks: {
      beforeCreate(users, option) {
        users.wallet = 0;
        users.avatar = 'https://via.placeholder.com/150'
        users.deletedFlag = 0;
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
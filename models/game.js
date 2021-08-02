'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.belongsToMany(models.User, {through: 'models.UserInventory'});
      Game.hasMany(models.UserInventory);
      Game.belongsToMany(models.User, {through: 'models.UserCart'});
      Game.hasMany(models.UserCart);
    }
  };
  Game.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          message: 'Name cannot be empty!'
        },
        len: {
          args: [3, 50],
          message: 'Name must be between 3-50 characters!'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          message: 'Description cannot be empty!'
        }
      }
    },
    genre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          message: 'Genre field is required!'
        },
        len: {
          args: [3, 20],
          message: 'Genre must be between 3-20 characters!'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [10000],
          message: 'Minimum price is 10000!'
        }
      },
      isNumeric: {
        args: true,
        message: 'Price is numeric!'
      }
    },
    image: {
       type: DataTypes.STRING,
      validate: {
        isUrl: {
          args: true,
          message: 'Avatar must be in a url format!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
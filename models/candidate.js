'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Candidate.init({
    full_name: DataTypes.STRING,
    group_name: DataTypes.STRING,
    form_id: DataTypes.UUIDV4,
    university: DataTypes.TEXT,
    birthdate: DataTypes.DATE,
    student_card: DataTypes.TEXT,
    email: DataTypes.TEXT,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};
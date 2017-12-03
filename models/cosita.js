
export default function (sequelize, DataTypes) {
  const Cosita = sequelize.define('Cosita', {
    nombre: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cosita;
};
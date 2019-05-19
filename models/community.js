module.exports = function(sequelize, DataTypes) {
  var Community = sequelize.define("Community", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    qty: DateTypes.INTEGER,
    email: DataTypes.STRING
  });
  return Community;
};

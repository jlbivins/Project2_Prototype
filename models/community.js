module.exports = function (sequelize, DataTypes) {
  var Community = sequelize.define("Community", {
                  first_name: DataTypes.STRING,
                  last_name: DataTypes.STRING,
                  qty: DataTypes.INTEGER,
                  email: DataTypes.STRING
                  });
   console.log(Community);
  return Community;
};

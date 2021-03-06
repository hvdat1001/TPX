const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING(2048),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "products_category_idx",
        using: "BTREE",
        fields: [
          { name: "category" },
        ]
      },
    ]
  });
};

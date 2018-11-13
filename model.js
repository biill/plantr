const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr',{logging: false});

 
const Gardener = db.define('person', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shaded: {
    type: Sequelize.BOOLEAN,
  }
});

const Vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  planted_on: {
    type: Sequelize.DATE
  }
});
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
Plot.belongsTo(Gardener,{as: 'gardener'})
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

module.exports = db

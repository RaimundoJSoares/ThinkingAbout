const { Sequelize} = require('sequelize')

const sequelize = new Sequelize('ThinkingAbout', 'root', '',{
  host: 'localhost',
  dialect: 'mysql'
} )

try {
  sequelize.authenticate()
  console.log(' 😆 Authentication successful')
} catch (error) {
  console.log( ' 😐 Authentication failed: ' `${error}`)
}

module.exports = sequelize
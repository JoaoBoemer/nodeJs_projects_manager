const db = require('./db')

const Posts = db.sequelize.define('projects', {
    name: {
        type: db.Sequelize.STRING
    },
    date_to: {
        type: db.Sequelize.DATE
    },
    date_from: {
        type: db.Sequelize.DATE
    },
    late: {
        type: db.Sequelize.BOOLEAN
    }
})

const Usuarios = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    }
})

module.exports = Posts;
//projects.sync({force:true})
//Usuarios.sync({force:true})
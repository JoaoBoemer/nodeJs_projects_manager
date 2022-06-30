const db = require('./db')

const Posts = db.sequelize.define('projects', {
    name: db.Sequelize.STRING,
    date_to: db.Sequelize.DATE,
    date_from: db.Sequelize.DATE,
    late: db.Sequelize.BOOLEAN,
    done: db.Sequelize.DOUBLE
}, {
    timestamps: false
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
//Posts.sync({force:true})
//Usuarios.sync({force:true})
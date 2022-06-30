const db = require('./db')

const Projects = db.sequelize.define('projects', {
    name: db.Sequelize.STRING,
    date_to: db.Sequelize.DATE,
    date_from: db.Sequelize.DATE,
    late: db.Sequelize.BOOLEAN,
    done: db.Sequelize.DOUBLE
}, {
    timestamps: false
})

const activity = db.sequelize.define('activity', {
    name: db.Sequelize.STRING,
    date_to: db.Sequelize.DATE,
    date_from: db.Sequelize.DATE,
    late: db.Sequelize.BOOLEAN,
    finished: db.Sequelize.BOOLEAN,
    project_id: {
        type: db.Sequelize.INTEGER,
        references: 'projects',
        referencesKey: 'id'
    }
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

//Projects.hasMany(activity);
activity.sync({force:true})
module.exports = Projects;
//Projects.sync({force:true})
//Usuarios.sync({force:true})
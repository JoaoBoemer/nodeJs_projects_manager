const db = require('./db')

const Project = db.sequelize.define('projects', {
    name: db.Sequelize.STRING,
    date_to: db.Sequelize.DATE,
    date_from: db.Sequelize.DATE,
    late: db.Sequelize.BOOLEAN,
    done: db.Sequelize.DOUBLE
}, {
    timestamps: false
})

const Activity = db.sequelize.define('activities', {
    name: db.Sequelize.STRING,
    date_to: db.Sequelize.DATE,
    date_from: db.Sequelize.DATE,
    late: db.Sequelize.BOOLEAN,
    finished: db.Sequelize.BOOLEAN
}, {
    timestamps: false
})

Project.hasMany(Activity);
Activity.belongsTo(Project);
exports.Projects = Project;
exports.Activity = Activity;
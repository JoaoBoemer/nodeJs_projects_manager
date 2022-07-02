const Post = require('../app/models/Posts')
const notifier = require('node-notifier');

const home = (req, res) => {
    Post.Projects.findAll().then(function(projects){
        Post.Activity.findAll().then(function(activities){
            if(teste){
                res.status(200).render('home', {projects: projects, activities: activities})
            } else {
                res.status(200).render('home', {projects: projects, activities: activities})
            }
            var teste = false;
        })
    })
}

const projectAdd = (req, res) => {
    if(req.body.date_to < req.body.date_from){
        notifier.notify('Data inicial nao pode ser menor que data final')
        res.redirect('/');
    } else {
        var late = 0;
        if(req.body.late){
            late = 0;
        }else{
            late = 1;
        }
        Post.Projects.create({
            name: req.body.projectName,
            date_from: req.body.date_from,
            date_to: req.body.date_to,
            done: req.body.done,
            late: late
        }).then(function(){
            res.redirect('/');
        }).catch(function(error){
            res.send("Error: " + error);
        })
    }
}

const projectDestroy = (req, res) => {
    Post.Activity.findOne({where: {'projectId': req.params.id}}).then(function(project){
        if(project == null){
            Post.Projects.destroy({where: {'id': req.params.id}}).then(function(){
                res.redirect('/');
            }).catch(function(error){
                res.status(400).send("Error: " + error);
            })
        } else {
            notifier.notify('Não é possivel deletar projeto com atividade existente. Delete a atividade primeiro.')
            res.redirect('/');
        }
    })
}

const activityAdd = (req, res) => {
    if(req.body.date_to < req.body.date_from){
        notifier.notify('Data inicial nao pode ser menor que data final')
        res.redirect('/');
    } else { 
        var late = 0, finished = 0;
        if(req.body.finished){
            finished = 1;
        }else{
            finished = 0;
        }
        if(req.body.late){
            late = 1;
        }else{
            late = 0;
        }
        Post.Activity.create({
            name: req.body.activityName,
            date_from: req.body.date_from,
            date_to: req.body.date_to,
            projectId: req.body.projectId,
            finished: finished,
            late: late,
        }).then(function(){
            res.redirect('/');
        }).catch(function(error){
            res.send("Error: " + error);
        })
    }
}

const activityDestroy = (req, res) => {
    Post.Activity.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/');
    }).catch(function(error){
        res.send("Error: " + error);
    })
}

module.exports = {
    home,
    projectAdd,
    projectDestroy,
    activityAdd,
    activityDestroy
}
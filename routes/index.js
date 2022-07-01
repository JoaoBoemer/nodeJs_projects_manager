const express = require('express');
const router = express.Router();
const Post = require('../app/models/Posts')

router.get('/', (req, res) => {
    Post.Projects.findAll().then(function(projects){
        Post.Activity.findAll().then(function(activities){
            res.render('home', {projects: projects, activities: activities})
        })
        //res.render('home', {projects: projects});
    })
})
/*
router.get('/teste', (req,res) => {
    Post.Activity.findAll().then(function(posts){
        res.render('home', {posts: posts});
    })
})
*/
router.post('/project/add', (req,res) => {
    Post.Projects.create({
        name: req.body.projectName,
        date_from: req.body.date_from,
        date_to: req.body.date_to,
        done: req.body.done,
        late: 0
    }).then(function(){
        res.redirect('/');
    }).catch(function(error){
        res.send("Error: " + error);
    })
})

router.get('/project/:id', (req, res) => {
    Post.Activity.findOne({where: {'projectId': req.params.id}}).then(function(project){
        if(project == null){
            Post.Projects.destroy({where: {'id': req.params.id}}).then(function(){
                res.redirect('/');
            }).catch(function(error){
                res.send("Error: " + error);
            })
        } else {
            res.redirect('/');
        }
    })
})

router.post('/activity/add', (req,res) => {
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
})

router.get('/activity/:id', (req, res) => {
    Post.Activity.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/');
    }).catch(function(error){
        res.send("Error: " + error);
    })
})

module.exports = router;
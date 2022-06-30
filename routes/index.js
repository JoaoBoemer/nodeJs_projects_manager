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
        done: 5,
        late: 0
    }).then(function(){
        res.redirect('/');
    }).catch(function(error){
        res.send("Error: " + error);
    })
})

router.get('/project/:id', (req, res) => {
    Post.Projects.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/');
    }).catch(function(error){
        res.send("Error: " + error);
    })
})

router.post('/activity/add', (req,res) => {
    Post.Activity.create({
        name: req.body.activityName,
        date_from: req.body.date_from,
        date_to: req.body.date_to,
        projectId: req.body.projectId,
        finished: req.body.finished,
        late: 0
    }).then(function(error){
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
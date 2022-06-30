const express = require('express');
const router = express.Router();
const Projects = require('../app/models/Posts')


router.get('/', (req, res) => {
    Projects.findAll().then(function(posts){
        res.render('home', {posts: posts});
    })
})

router.post('/project/add', (req,res) => {
    Projects.create({
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
    Projects.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/');
    }).catch(function(error){
        res.send("Error: " + error);
    })
})

module.exports = router;
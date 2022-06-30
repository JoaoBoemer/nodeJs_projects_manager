const express = require('express');
const app = express();
const Projects = require('./app/models/Posts');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');

//BodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set(__dirname + '/views');
//HandleBars
app.engine('handlebars',engine({defautLayout: 'main',
runtimeOptions: {
          allowProtoPropertiesByDefault: true,
          allowProtoMethodsByDefault: true,
        }}))
app.set('view engine', 'handlebars');
/// Rotas
app.get('/', (req, res) => {
    Projects.findAll().then(function(posts){
        res.render('home', {posts: posts});
    })
})
app.post('/project/add', (req,res) => {
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

app.get('/project/:id', (req, res) => {
    Projects.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/');
    }).catch(function(error){
        res.send("Error: " + error);
    })
})
    


const PORT = 8080;
app.listen(
    PORT,
    () => console.log(`Server running: http://localhost:${PORT}`)
)
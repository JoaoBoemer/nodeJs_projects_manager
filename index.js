const express = require('express')
const app = express()
const path = require('path')
const Posts = require('./app/models/Posts')
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set(__dirname + '/views');
app.engine('handlebars',engine({defautLayout: 'main',
runtimeOptions: {
          allowProtoPropertiesByDefault: true,
          allowProtoMethodsByDefault: true,
        }}))
app.set('view engine', 'handlebars')

/// Rotas
app.get('/', (req, res) => {
    Posts.findAll().then(function(posts){
        res.render('home', {posts: posts});
    })
})

app.get('/teste', (req,res) => {
    res.render('home', {name: "OI", date_to: "23-12-23"})
})

const PORT = 8080
app.listen(
    PORT,
    () => console.log(`Server running: http://localhost:${PORT}`)
)
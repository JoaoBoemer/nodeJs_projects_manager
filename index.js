const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const router = require('./routes/index')

//Public folder
app.use(express.static(__dirname+'/public'));
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
app.use('/', router);


const PORT = 8080;
app.listen(
    PORT,
    () => console.log(`Server running: http://localhost:${PORT}`)
)
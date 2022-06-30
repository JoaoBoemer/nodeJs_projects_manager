const express = require('express')
const app = express()
const path = require('path')
const Posts = require('./app/models/Posts')
const PORT = 8080


//require("./app/routes/index")(app);

/// Rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(
    PORT,
    () => console.log(`Server running: http://localhost:${PORT}`)
)
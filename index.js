const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/website/index.html")
});

app.listen(
    PORT,
    () => console.log(`Server running: http://localhost:${PORT}`)
)
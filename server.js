require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

console.log(process.env.PORT);

app.use('/', (req, res) => {
    res.json({
        data: "Hello world"
    })
})

app.listen(port, () => console.log(`http:localhost:${port}`));
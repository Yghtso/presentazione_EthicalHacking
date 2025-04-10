const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { username: "Mario", prodotti: ["Pizza", "Pasta", "Gelato"] });
});

app.listen(3000, () => console.log("Server avviato su http://localhost:3000"));
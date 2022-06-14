const express = require('express');
const port = 8222;
const app = express();

const cors = require('cors');

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

app.use(express.static('../frontend'));
app.use(cors())
// app.get('/', (req, res) => {
//     res.render("index.html")
// })

app.get('/informacoes', (req,res) => {
    async function insertDB() {
        var db = await sqlite.open({filename: './Banco_de_dados.db', driver: sqlite3.Database})

        const informacoes = await db.get('SELECT * FROM informacoes');

        res.json(informacoes)
    }

    insertDB();
})

app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}`)
})
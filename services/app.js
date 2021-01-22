const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Objeto para fazer conexão com bd
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "whydea",
    password: "postgres",
    port: 5432
});

// Insere um dado no banco de dados
app.post("/insert/people", (req, res) => {
    const { nome, email, usuario, senha } = req.body;

    pool.query(
        "INSERT INTO peoples (nome, email, usuario, senha) VALUES ($1, $2, $3, $4)",
        [nome, email, usuario, senha],
        (error, results) => {
            if (error) {
                throw error;
            }

            res.sendStatus(201);
        }
    );
});

// Retorna usuários cadastrados na tabela
app.get("/usuario", (req, res) => {
    pool.query(
        "SELECT * FROM peoples",
        [],
        (error, results) => {
            if (error) {
                throw error;
            }

            res.status(200).json(results.rows);
        }
    );
});

app.listen(8000, () => {
    console.log(`Server On`);
});


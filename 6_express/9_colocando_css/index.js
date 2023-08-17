const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Variáveis de ambiente

const basePath = path.join(__dirname, "templates");

const users = require('./users')

// Ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Arquivos estáticos
app.use(express.static('public'))

app.use('/users', users)

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

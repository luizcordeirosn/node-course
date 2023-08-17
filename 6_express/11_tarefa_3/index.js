const express = require('express')
const path = require('path')

const app = express()
const port = 5000;

const basePath = path.join(__dirname, "templates");

const projects = require('./projects');

// Ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

// Arquivos estáticos
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.use('/projects', projects)

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});

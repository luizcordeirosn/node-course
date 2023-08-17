const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ["Item 1", "Item 2", "Item 3"]

    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {

    const post = {
        title: "Aprender node.js",
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender Node.js...",
        comments: 3
    }

    res.render("blogpost", {post})
})

app.get('/', (req, res) => {

    const user = {
        name: "Luiz",
        surname: "Cordeiro",
        age: 23
    }

    const auth = true

    const approved = false

    res.render('home', { user: user, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando')
})
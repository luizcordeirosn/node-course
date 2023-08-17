const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ["Item 1", "Item 2", "Item 3"]

    res.render('dashboard', { items })
})

app.get('/blog', (req, res)=>{
    const posts = [
        {
            title: "Aprender Node.js",
            category: "JavaScript",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "Teste",
            comments: 4
        }
    ]

    res.render('blog', {posts})
})

app.get('/post', (req, res) => {

    const post = {
        title: "Aprender node.js",
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender Node.js...",
        comments: 3
    }

    res.render("blogpost", { post })
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
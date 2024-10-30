const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.listen(3000)

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum sit amet consecetur' },
        { title: 'Mario finds eggs', snippet: 'Lorem ipsum sit amet consecetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum sit amet consecetur' }
    ]
    res.render('index', { title: 'Home', blogs })
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'about' })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create blog' })
})

app.get('/contact', (req, res) => {
    const about = {
        name: 'Mario Šutalo',
        email: 'mario.sutalo@gmail.com',
        info: 'Some text about me'
    }
    res.render('contact', { about })
})

app.get('/categories', (req, res) => {
    const categories = [
        { name: 'PCs', products: 23 },
        { name: 'Audio', products: 12 },
        { name: 'Video', products: 20 },
    ]
    res.render('categories', { categories })
})

app.use((req, res) => {
    res.status(404).render('404', { title: 'page not found' })
})

console.log('end')
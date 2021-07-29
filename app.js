const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/home', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.listen(8080, () => {
    console.log("Servidor en el puerto 8080")
})
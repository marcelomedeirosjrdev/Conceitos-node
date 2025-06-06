import express from 'express'

const app = express()
app.use(express.json())

app.get('/usuarios', (req, res) => {
    console.log(req)

    res.send('Olá, Rota enviada, eu sou lindo')
})

app.post('/usuarios', (req, res) => {

    console.log(req)

    res.send('Olá')
})

app.listen(3001) 


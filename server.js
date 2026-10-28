import express from 'express'

const app = express()
const users = []

app.use(express.json())






app.get('/usuarios',  (req, res) => {

    console.log(req)

    res.status(200).json(users)
})

app.post('/usuarios', (req, res) => {

users.push(req.body)
   

    res.status(201).json({message: "Usário criado com sucesso"})
})







app.listen(3000)


/* 
marcelo
123456

marcelomedeiiros_db_user
YYfVtmqacEFZt47m


*/
const bodyParser = require('body-parser') // Faz o parse dos dados
const express = require('express') // importando express
const app = express() // instanciando 

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

app.get('/teste', (req,res) => res.send('ok'))
app.listen(8081, () => console.log('Executando ...'))
//common modules 
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
// custom modules
const notesApiRoute = require('./routes/api/notes')
const notesRoute = require('./routes/notes')

app.set('views', path.join(__dirname,'views'))
app.set('view engine','pug')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))


app.use('/api/note', notesApiRoute)
app.use('/notes',notesRoute)
app.listen(3000, function(){
  console.log('Server started')
})
const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn')

const app = express()

const Ideia = require('./models/Ideia')
const authRouter = require('./routes/authRoutes')
const IdeiasRoute = require('./routes/ideiasRoutes')
const IdeiaController = require('./controllers/IdeiaController')


app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

//pitstop = midware
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

app.use('/ideias', IdeiasRoute)
app.use('/', authRouter)

conn
.sync({force: true})
.then(() =>{
    app.listen(3000, () => {
        console.log('Servidor operando na porta local: http://127.0.0.1:3000')
    })
})
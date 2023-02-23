const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session)
const flash = require('express-flash');
PORT = 3000
const connect = require('./db/connect')

//receber resposta do body
app.use(
  express.urlencoded({
    extended: true
  })
  )

app.use(express.json())

//middleware
app.use(
  session({
    name: 'session',
    secret: 'our_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function() {},
      path: require('path').join(require('os').tmpdir(), 'sessions')
    }),
    cookie: {
      secure: false,
      maxAge: 1000 * 60  * 60  * 24, //  1 day
      expires : new Date(Date.now() +  1000 * 60 * 60 * 24),
      httpOnly: true
    }
  })
)

connect
 .sync()
 .then(() => {
  app.listen(3000)
 })
 .catch((err) => console.log(err))
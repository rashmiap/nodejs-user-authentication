// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let usersRouter = require('./app/router/user.router.js')
const db = require('./app/config/mongodb.env.js')

const PORT = 6000;

const mongoose = require('mongoose')
mongoose.connect(db.MONGO_DB_URI, { useNewUrlParser: true })

//body parser middleware added
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});

app.use('/api',usersRouter)

// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let usersRouter = require('./app/router/user.router.js')


const PORT = 6000;

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});

app.use('/api',usersRouter)

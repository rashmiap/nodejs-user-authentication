const express = require('express');
const app = express();
var cors = require('cors')
let router = express.Router();
const bodyParser = require('body-parser');
const usersRouter = require('./app/router/user.router.js');
const dishRouter = require('./app/router/dish.router.js');
const pollRouter = require('./app/router/poll.router.js');
const db = require('./app/config/mongodb.env.js');

const PORT = 6000;

const mongoose = require('mongoose')
mongoose.connect(db.MONGO_DB_URI, { useNewUrlParser: true })

// cors middleware added
app.use(cors());

//body parser middleware added
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
});

// Setup router for http rest routes
app.use('/api/auth', usersRouter)
app.use('/api/dish', dishRouter)
app.use('/api/dish', pollRouter)

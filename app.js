const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors')
const cookieParser = require("cookie-parser")

//Connect to DB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('connected to DB!')
);

app.use(cors({ credentials: true, origin: process.env.REACT_APP_CORS_LINK }));
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cookieParser());

//Import Routes
const tasksRoute = require('./routes/tasks');
const authRoute = require('./routes/auth');
app.use('/tasks', tasksRoute);
app.use('/user', authRoute);



//How do we start listening to the server
app.listen(5000, () => {
    console.log('Server up at 5000')
});

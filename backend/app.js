var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var agentsRouter = require("./routes/agents")

var getRouter = require('./routes/get-routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//TODO: Cors erstellen - WICHTIG : Vor den Routen erstellen
var cors = require('cors');
//TODO: Cors Options einrichten
const corsOptions = {
    origin: '*', //Zugriff aller IPs erlauben
};
app.use(cors(corsOptions));
// app.use('/', indexRouter);
// app.use('/agents', agentsRouter);
app.use('/vitamins', getRouter  );
// app.use('/users', usersRouter);


module.exports = app;

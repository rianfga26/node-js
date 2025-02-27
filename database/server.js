var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller');

    app.use(bodyParser.urlencoded({extends: true}));
    app.use(bodyParser.json());

    var routes = require('./routes');
    routes(app);

    app.listen(port);
    console.log('server is running on port :' + port);

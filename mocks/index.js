(function() {
    'use strict';

    const express = require('express');
    const app = express();

    const cookieParser = require('cookie-parser');
    const bodyParser = require('body-parser');
    const cfg = require('./config');


    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        extended: true
    }));

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


    app.use(cfg.httpServer.dev.pathRoot, express.static(cfg.httpServer.dev.path));
    app.set('host', cfg.httpServer.dev.host);



    for (let i = 0; i < cfg.httpServer.resApi.length; i++) {
        var srv = cfg.httpServer.resApi[i];

        var route = require('./rest')(srv.express.path);

        app.use(srv.express.mockURL, route);
    }
    app.listen(cfg.httpServer.dev.port, function() {
        console.log('server up at http://localhost:' + cfg.httpServer.dev.port + '/');
    });


    module.exports.app = exports.app = app;
}());
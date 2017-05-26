(function() {
    'use strict';

    var express = require('express'),
        fs = require('fs');

    exports = module.exports = restPath;



    function restPath(pathIni) {
        const fs = require('fs');
        const app = express();
        const path = require('path');
        const pathDir = path.resolve('.') + pathIni;

        var files = fs.readdirSync(pathDir);

        files.forEach(function(fl) {
            var file = fs.lstatSync(pathDir + '/' + fl);

            if (file.isDirectory()) {
                console.log('/' + fl + ':' + pathIni + '/' + fl);
                var rutas = restPath(pathIni + '/' + fl);
                app.use('/' + fl, rutas);
            } else if (fl === "index.js") {
                console.log('---' + fl);
                app.use('/', require(pathDir + '/index'));
            }
        });

        return app;
    }
}());
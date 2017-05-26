(function() {
    'use strict';
    module.exports = {
        httpServer: {
            dev: {
                port: 4001,
                host: 'localhost',
                pathRoot: '/',
                path: './',
                server: 'localhost',
                serverType: 'http'
            },
            "resApi": [{
                "name": "API",
                "express": {
                    "path": "/mocks/API",
                    "mockURL": "/",
                    "title": "Mocks Servicios api Phone"
                }
            }]
        }
    }
}());
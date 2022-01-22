'use strict';

const Hapi = require('@hapi/hapi');
const Path = require('path');
const path = require("path");

const SERVER_PORT = process.env.PORT || 5050;
const {run:prepareFiles} = require("../parser/src/Parser")
const start = async () => {
    await prepareFiles(path.resolve(__dirname,"public"))
    const server = Hapi.server({
        port:SERVER_PORT,
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    });

    await server.register(require('@hapi/inert'));

    server.route({
        method: 'GET',
        path: '/data.json',
        handler: function (_, h) {

            return h.file('appData.json');
        }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};
start();
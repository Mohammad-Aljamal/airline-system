'use strict';

require('dotenv').config();
const port = process.env.PORT || 3030;
const io = require('socket.io-client');
const host = `http://localhost:${port}/`;
const managerConnection = io.connect(host);



managerConnection.on("new-flight",flightDetails);
managerConnection.on("took-off",flightDetails);
managerConnection.on("Arrived",flightDetails);

function flightDetails (payload) {
    console.log('Flight ', payload);
}
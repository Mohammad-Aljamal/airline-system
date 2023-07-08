'use strict';

require('dotenv').config();
const port = process.env.PORT || 3030;
const io = require('socket.io-client');
const host = `http://localhost:${port}/`;
const systemConnection = io.connect(host);

const airlineHost = `http://localhost:${port}/airline`;
const airlineConnection = io.connect(airlineHost);


airlineConnection.on("new-flight",newFlight);

function newFlight(payload) {
    setTimeout(() => {
        console.log(`flight with ID ‘${payload.Details.flightID}’ took-off`)
        payload.event = 'took-off';
        airlineConnection.emit("took-off", payload);
    }, 4000);

    setTimeout(() => {
        console.log(`Pilot: flight with ID '${payload.Details.flightID}' has arrived`)
        payload.event = 'Arrived';
        systemConnection.emit("Arrived", payload);
        systemConnection.emit('thanku',payload);
    }, 7000);
}



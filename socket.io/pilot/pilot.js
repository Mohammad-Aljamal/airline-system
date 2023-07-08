'use strict';

require('dotenv').config();
const port = process.env.PORT || 3030;
const io = require('socket.io-client');
const host = `http://localhost:${port}/`;
const managerConnection = io.connect(host);




managerConnection.on("new-flight",newFlight);

function newFlight(payload) {
    setInterval(() => {
        managerConnection.emit("took-off", payload);
        console.log(`flight with ID ‘${payload.Details.flightID}’ took-off`)

        setInterval(() => {
            managerConnection.emit("Arrived", payload);
            console.log(`Pilot: flight with ID '${payload.Details.flightID}' has arrived`)
        }, 3000);

    }, 4000);
}
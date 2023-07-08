'use strict';

const event = require('../events');

event.on("new-flight",newFlight);

function newFlight(payload) {
    setTimeout(() => {
        console.log(`flight with ID ‘${payload.Details.flightID}’ took-off`)
        payload.event = 'took-off';
        event.emit("took-off", payload);

        setTimeout(() => {
            console.log(`Pilot: flight with ID '${payload.Details.flightID}' has arrived`)
            payload.event = 'Arrived';
            event.emit("Arrived", payload);
            event.emit('thanku',payload);
        }, 3000);

    }, 4000);
}
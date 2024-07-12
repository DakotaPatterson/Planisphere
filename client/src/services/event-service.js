const { create } = require("../../../server/models/users");

const eventServices = {
    getAll: async function() {
        const promise = await fetch('http://localhost:4000/events');
        const events = await promise.json();
        return events;
    },

    create: async function(data) {
        const response = await fetch('http://localhost:4000/events/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        const event = await response.json();
        return event;
    },
    
    update: async function(id, data) {
        const response = await fetch(`http://localhost:4000/events/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        });

        const event = await response.json();
        return event;
    },

    delete: async function(id) {
        const response = await fetch(`http://localhost:4000/events/delete/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        return response;
    }
};

export default eventServices;

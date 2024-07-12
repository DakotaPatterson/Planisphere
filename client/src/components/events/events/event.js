import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import eventServices from '../../../services/eventServices';

const Event = ({event}) => {
    const history = useHistory();

    const handleEdit = (e) => {
        const id = e.currentTarget.id;
        history.push(`/events/edit/${id}`);
    }

    const handleDelete = (e) => {
        const id = e.currentTarget.id;
        eventServices.deleteEvent(id)
            .then(() => history.push('/'))
            .catch(error => console.error('error deleting event', error));
    }

    const showDetails = (e) => {
        const id = e.currentTarget.id;
        try {
            eventServices.delete(id).then(() => history.push(`/events/details/${id}`));
        } catch (error) {
            console.error('error fetching event', error);
        }
    }

    return (
        <div className="Event" key={event._id}>
            <img src={event.imageURL} alt="Event" className="details" onClick={showDetails} id={event._id}/>
            <p className="name">{event.name}</p>
            <p className="description">{event.description}</p>
            {event.admin.firstName && (
                <div className="creator">
                    <span>Creator: </span>
                    {event.admin.firstName + ' ' + event.admin.lastName}
                </div>
            )}
            <div className="buttons">
                <button className="links" id={event._id} onClick={handleEdit}>Edit</button>
                <button className="links" id={event._id} onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Event;

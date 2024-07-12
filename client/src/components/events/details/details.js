import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import eventServices from '../../../services/eventServices';

const Details = () => {
    const [event, setEvent] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        eventServices.getEventById(id)
            .then(event => setEvent(event))
            .catch(error => console.error('error fetching event', error));
    }, [id]);

    const handleEdit = () => {
        history.push(`/events/edit/${id}`);
    }

    const handleDelete = () => {
        eventServices.deleteEvent(id)
            .then(() => history.push('/'))
            .catch(error => console.error('error deleting event', error));
    }

    const render = () => {
        return (
            <div className="Details">
                <div className="question-answers">
                    <span className="question">What is the name of the event?</span>
                    <p className="name">{event.name}</p>
                    <span className="question">Where will the event be held?</span>
                    <p className="location">{event.location}</p>
                    <span className="question">When will the event be held?</span>
                    <p className="date">{event.date}</p>
                    <span className="question">What is the event about?</span>
                    <p className="description">{event.description}</p>
                    <span className="question">What is the budget for the event?</span>
                    <p className="budget">{event.budget}</p>
                </div>
                <div className="buttons">
                    {admin && (
                        <div className="buttons">
                            <button className="links" id={event._id} onClick={handleEdit}>Edit</button>
                            <button className="links" id={event._id} onClick={handleDelete}>Delete</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return Object.keys(event).length ? render() : <p>Loading...</p>;
};

export default Details;

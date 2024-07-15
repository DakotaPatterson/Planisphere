import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import eventServices from '../../../services/eventServices';

const Create = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        eventServices.createEvent({ name, description, date, location, budget })
            .then(() => history.push('/'))
            .catch(error => console.error('error creating event', error));
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onChangeDate = (e) => {
        setDate(e.target.value);
    }

    const onChangeLocation = (e) => {
        setLocation(e.target.value);
    }

    const onChangeBudget = (e) => {
        setBudget(e.target.value);
    }

    return (
        <div>
            <h1>Create Event</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={onChangeName} />
                <input type="text" placeholder="Description" value={description} onChange={onChangeDescription} />
                <input type="date" value={date} onChange={onChangeDate} />
                <input type="text" placeholder="Location" value={location} onChange={onChangeLocation} />
                <input type="number" placeholder="Budget" value={budget} onChange={onChangeBudget} />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
}

export default Create;

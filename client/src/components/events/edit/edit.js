import React from "react";
import eventServices from "../../../services/event-services";
import { withRouter } from "react-router";

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            date: '',
            location: '',
            budget: ''
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeBudget = this.onChangeBudget.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    onChangeDate(e) {
        this.setState({ date: e.target.value });
    }

    onChangeLocation(e) {
        this.setState({ location: e.target.value });
    }

    onChangeBudget(e) {
        this.setState({ budget: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const id = this.props.match.params.id.toString();
        const { name, description, location, date, budget } = this.state;
        eventServices.edit(id, { name, description, location, date, budget })
            .then(() => {
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        const id = this.props.match.params.id.toString();

        eventServices.get().then(events => {
            events.forEach(event => {
                if (event._id === id) {
                    this.setState({
                        name: event.name,
                        description: event.description,
                        location: event.location,
                        date: event.date,
                        budget: event.budget
                    });
                }
            })
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <form className="Edit" onSubmit={this.handleSubmit}>
                <p className="title">Edit your event</p>
                <div className="input">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.onChangeName}
                        value={this.state.name}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={this.onChangeDescription}
                        value={this.state.description}
                    />
                </div>
                <div className="input">
                    <input
                        type="date"
                        name="date"
                        min="01/01/2021"
                        max="01/01/2030"
                        onChange={this.onChangeDate}
                        value={this.state.date}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        onChange={this.onChangeLocation}
                        value={this.state.location}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="budget"
                        placeholder="Budget"
                        onChange={this.onChangeBudget}
                        value={this.state.budget}
                    />
                </div>
                <button type="submit" className="btn">Edit</button>
            </form>
        )
    }
}

export default withRouter(Edit);

import React from 'react';

class Rsvp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            attending: null,
            partySize: 1,
            email: "",
            carpool: false,
            message: "",
            comments: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target)
        let t = e.target
        let value = (t.type == "checkbox") ? t.checked : e.target.value;
        switch (t.type) {
            case "checkbox":
                value = t.checked;
                break;
            case "radio":
                value = (t.value == "true" ? true : false);
                break;
            default:
                value = t.value;
                break;
        }
        let field = (t.type == "radio") ? t.name : t.id;
        let newState = Object.assign(this.state,{
            [field]: value
        })
        this.setState(newState)
    }

    render() {

        return(
            <div id="Rsvp">
                <form>
                    <h3 className="text-center">We hope you can join us!</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Name(s)" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="attending" id="attendingYes" value="true" checked={this.state.attending == null ? false : this.state.attending} onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="attendingYes">
                            I'll be there!
                        </label>
                    </div>
                    <div className="form-check">

                        <input className="form-check-input" type="radio" name="attending" id="attendingNo" value="false" checked={this.state.attending == null ? false : !this.state.attending} onChange={this.handleChange}/>
                        <label className="form-check-label" htmlFor="attendingNo">
                            I can't make it
                        </label>
                    </div>
                    <div id="attendingOnly" className={"attendingDependent" + (!this.state.attending ? " hidden" : "")}>
                        <h3 className="text-center">Wonderful, We're so glad you can join us!</h3>
                        <div className="form-group">
                            <label htmlFor="partySize">How many total in your party?</label>
                            <input type="number" className="form-control" id="partySize" placeholder="" value={this.state.partySize} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="wedding@guest.com" value={this.state.email} onChange={this.handleChange}/>
                            <small id="emailHelp" className="form-text">Just in case we need to share more details.</small>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="carpool" value={this.state.carpool} onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="carpool">Are you interested in carpooling to Occidental?</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="comments">Anything else?</label>
                            <textarea className="form-control" id="comments" placeholder="Dietary or other needs? Just want to leave us a note?" value={this.state.comments} onChange={this.handleChange} rows="3"/>
                        </div>
                    </div>
                    <div id="notAttendingOnly" className={"attendingDependent" + ((this.state.attending == null || this.state.attending) ? " hidden" : "")}>
                        <h3 className="text-center">We're sorry you can't come!</h3>
                        <div className="form-group">
                            <label htmlFor="message">Would you like to leave us a message?</label>
                            <textarea className="form-control" id="message" aria-describedby="messageHelp" placeholder="" value={this.state.message} onChange={this.handleChange} rows="5"/>
                            <small id="messageHelp" className="form-text">(We'll read them on our wedding day!)</small>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">{this.state.attending ? "RSVP" : "Submit"}</button>
                </form>
            </div>
        )
    }

}

export default Rsvp;
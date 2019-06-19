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
            comments: "",
            formErrors: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
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
        let newState = Object.assign({}, this.state,{
            [field]: value
        });
        this.setState(newState)
    }

    validateForm() {
        let errors = [];
        if (this.state.name == null || this.state.name == "") {
            errors.push({field: "name", message: "Please enter your name"})
        }
        if (this.state.attending && (this.state.email == null || this.state.email == "")) {
            errors.push({field: "email", message: "Please enter your email address"})
        }
        return errors;
    }

    handleSubmit(e) {
        let errors = this.validateForm();

        if (errors.length == 0) {
            let postData = Object.assign({}, this.state);
            delete postData.formErrors;
            let siteKey = 'suN4vnVtLl4aEdJcczLvjYstVtjxAzeX';
            let onResponse = (error, response) => {
                this.props.recordFormSubmission(this.state.attending);
            };
            window.Pageclip.send(siteKey, 'default', postData, onResponse);
        } else {
            let newState = Object.assign({}, this.state, {
                formErrors: errors
            });
            this.setState(newState);
        }
    }

    render() {
        if (this.props.formSubmitted == true) {
            let msg = this.props.attending ? 
                "We look forward to celebrating with you" :
                "We're sorry you won't be able to make it"
            return(
                <div id="Rsvp">
                    <h4 className="serifText text-center">Thank you for your RSVP</h4>
                    <br />
                    <h6 className="serifText text-center">{msg}</h6>
                </div>
            )
        }

        let submit = null;
        if (this.state.attending != null) {
            submit = 
                <div className="myButton serifText" onClick={this.handleSubmit}>
                    {this.state.attending ? "RSVP" : "Submit"}
                </div>;
        }

        let errorsListItems = this.state.formErrors.map(err => {
            return(<li className="error"><i>{err.message}</i></li>);
        })

        let errors = null;
        if (errorsListItems.length > 0) {
            errors = 
                <div className="formErrors">
                    <h6 className="">We need just a bit more info:</h6>
                    <ul>
                        {errorsListItems}
                    </ul>
                </div>
        }

        return(
            <div id="Rsvp">
                <form action="https://send.pageclip.co/suN4vnVtLl4aEdJcczLvjYstVtjxAzeX" id="rsvp-form" className="pageclip-form" method="post">
                    <h3 className="text-center serifText">We hope you can join us!</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name(s)" placeholder="Name(s)" value={this.state.name} onChange={this.handleChange}/>
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
                        <h5 className="text-center serifText">Wonderful, We're so glad you can join us!</h5>
                        <br />
                        <div className="form-group">
                            <label htmlFor="partySize">How many total in your party?</label>
                            <input type="number" className="form-control" id="partySize" name="partySize" placeholder="" value={this.state.partySize} onChange={this.handleChange}/>
                            <small id="partyHelp" className="form-text">If you'd like to bring a guest (or children) not listed on your invite, please check with us first.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="wedding@guest.com" value={this.state.email} onChange={this.handleChange}/>
                            <small id="emailHelp" className="form-text">Just in case we need to share more details.</small>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="carpool" name="carpool" value={this.state.carpool} onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="carpool">Are you interested in carpooling to Occidental?</label>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="comments">Anything else?</label>
                            <textarea className="form-control" id="comments" name="comments" placeholder="Dietary or other needs? Just want to leave us a note?" value={this.state.comments} onChange={this.handleChange} rows="3"/>
                        </div>
                    </div>
                    <div id="notAttendingOnly" className={"attendingDependent" + ((this.state.attending == null || this.state.attending) ? " hidden" : "")}>
                        <h5 className="text-center serifText">We're sorry you can't come!</h5>
                        <br />
                        <div className="form-group">
                            <label htmlFor="message">Would you like to leave us a message?</label>
                            <textarea className="form-control" id="message" name="message" aria-describedby="messageHelp" placeholder="" value={this.state.message} onChange={this.handleChange} rows="5"/>
                            {/* <small id="messageHelp" className="form-text">(We'll read them on our wedding day!)</small> */}
                        </div>
                    </div>
                    {errors}
                    {submit}
                </form>
            </div>
        )
    }

}

export default Rsvp;
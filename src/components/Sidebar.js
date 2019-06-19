import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import SidebarMenu from './SidebarMenu';
import Details from './Details';
import Rsvp from './Rsvp';
import Gifts from './Gifts';
import Announcement from './Announcement';
import Explore from './Explore';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSubmitted: false,
            attending: null
        }
        this.recordRSVP = this.recordRSVP.bind(this);
    }

    recordRSVP(attending) {
        this.setState({
            formSubmitted: true,
            attending
        })
    }

    render() {
        let content
        let showMenu = true;
        switch (this.props.selectedPage) {
            case "Announcement":
                showMenu = false;
                break;
            case "Details":
                content = <Details />
                break;
            case "RSVP":
                content = <Rsvp recordFormSubmission={this.recordRSVP} formSubmitted={this.state.formSubmitted} attending={this.state.attending}/>
                break;
            case "Gifts":
                content = <Gifts />
                break;
            case "Explore":
                content = <Explore />
                break;
            default:
                content = <Details />
                break;
        }
        if (showMenu == false)
        {
            return (
                <Col id="sidebarContainer">
                    <Announcement selectPage={this.props.selectPage}/>
                </Col>
            );
        } else {
            return (
                <Col id="sidebarContainer">
                    <div id="Sidebar">
                        <SidebarMenu visible={showMenu} selectedPage={this.props.selectedPage} selectPage={this.props.selectPage}/>
                        <div id="SidebarContent">
                            {content}
                        </div>
                    </div>
                </Col>
            );
        }
    }
}

export default Sidebar;
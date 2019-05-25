import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import SidebarMenu from './SidebarMenu';
import Details from './Details';
import Rsvp from './Rsvp';
import Gifts from './Gifts';




class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let content 
        switch (this.props.selectedPage) {
            case "Details":
                content = <Details />
                break;
            case "RSVP":
                content = <Rsvp />
                break;
            case "Gifts":
                content = <Gifts />
                break;
        
            default:
                content = <Details />
                break;
        }
        return (
            <Col id="sidebarContainer" className={(this.props.hidden ? "sidebarHidden" : "")}>
                <div id="Sidebar" className={this.props.hidden ? "hidden" : ""}>
                    <SidebarMenu selectedPage={this.props.selectedPage} selectPage={this.props.selectPage}/>
                    <div id="SidebarContent">
                        {content}
                    </div>
                </div>
            </Col>
        );
    }
}

export default Sidebar;
import React, { Component } from 'react';
import './App.css';
import ImagePanel from './components/ImagePanel';
import Sidebar from './components/Sidebar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideSidebar: true,
      selectedPage: "Details"
    }
    this.selectPage = this.selectPage.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    console.log("here");
    let newState = {
      ...this.state,
      hideSidebar: !this.state.hideSidebar
    };
    this.setState(newState);
  }

  selectPage(selectedPage) {
    this.setState({
        ...this.state,
        selectedPage
    });
  }

  render() {
    return (
      <div className={"App"}>
        <div className="photoCover">
          <Container fluid={true} id="mainContainer">
            <Row noGutters={true} id="mainRow">
              <Col xs={12} sm={12} md={6} lg={7} className="heightCol">
                <ImagePanel
                  hideSidebar={this.state.hideSidebar}
                  toggleSidebar={this.toggleSidebar}
                  selectedPage={this.state.selectedPage}
                />
              </Col>
              <Sidebar hidden={this.state.hideSidebar} selectedPage={this.state.selectedPage} selectPage={this.selectPage} />
            </Row>
          </Container>

        </div>
      </div>
    );
  }
}

export default App;

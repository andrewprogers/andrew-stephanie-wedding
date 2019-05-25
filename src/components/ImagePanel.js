import React, { Component } from 'react';
import details from '../photos/details.JPG'
import gifts from '../photos/giftsLarge.jpg'
import rsvp from '../photos/rsvp.jpg'

const transitionMilliseconds = 500;
const FPS = 60;
let transitionSteps = FPS * (transitionMilliseconds / 1000);

const getImageSource = (page) => {

  switch (page) {
    case "Details":
      return details;
    case "RSVP":
      return rsvp;
    case "Gifts":
      return gifts;
  }
}

class ImagePanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previousImagePage: "Details",
      frontOpacity: 1
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedPage != prevProps.selectedPage) {
      this.setState({
        previousImagePage: prevProps.selectedPage,
        frontOpacity: 0
      })
    } else if (this.state.frontOpacity < 1) {
      let newOpacity = this.state.frontOpacity + (1 / transitionSteps);

      setTimeout(() => {
        this.setState(Object.assign(this.state, {
          frontOpacity: newOpacity
        }));
      }, transitionMilliseconds / transitionSteps);
    } else if (this.state.frontOpacity > 1) {
      this.setState({
        previousImagePage: null,
        frontOpacity: 1
      })
    }
  }


  render() {
      let imgRear = <img 
        src={getImageSource(this.state.previousImagePage)} 
        className="rear"
        />
      let imgFront = <img 
        src={getImageSource(this.props.selectedPage)} 
        className="front"
        style={{opacity: this.state.frontOpacity}}
        />

    return (
      <div id="ImagePanel">
        <div className={(this.props.hideSidebar ? " hidden" : "")}>
          {imgRear}
          {imgFront}
        </div>
        <div className="Announcement text-left" onClick={this.props.toggleSidebar}>
          <h1>
            <span className="name">Stephanie</span> and
            <br /><span className="name">Andrew</span> are
            <br />Getting Married!
          </h1>
        </div>
      </div>
    );

  }
}

export default ImagePanel;
import React, { Component } from 'react';
import details from '../photos/details.jpg'
import gifts from '../photos/giftsLarge.jpg'
import rsvp from '../photos/rsvp.jpg'
import announcement from '../photos/announcement.jpg'
import explore from '../photos/explore.jpg'

const transitionMilliseconds = 500;
const FPS = 60;
let transitionSteps = FPS * (transitionMilliseconds / 1000);

const getImageSource = (page) => {

  switch (page) {
    case "Announcement":
      return announcement;
    case "Details":
      return details;
    case "RSVP":
      return rsvp;
    case "Gifts":
      return gifts;
    case "Explore":
      return explore;
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
        <div>
          {imgRear}
          {imgFront}
        </div>
      </div>
    );

  }
}

export default ImagePanel;
import React from 'react';

class Details extends React.Component {
    componentDidMount() {
        let map = new window.mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
            center: [-122.947400, 38.408261], // starting position [lng, lat]
            zoom: 15, // starting zoom
            minZoom: 9,
            maxZoom: 16
        });
        console.log(map)
    }

    render() {
        return(
            <div id="Details">
                <h1>You're Invited!</h1>
                <p>
                    Andrew Paul Rogers
                    &amp;
                    Stephanie Rose Springer
                </p>
                
                <p>
                    Invite you to join them in celebration on their wedding day
                </p>
                
                <p>
                    Saturday, September 14th, 2019
                    <br />5:00 in the evening
                </p>
    
                <p>
                    The Union Hotel
                    <br />3731 Main Street
                    <br />Occidental, California
                </p>
    
                <p>
                    Dinner &amp; dancing to follow
                </p>
                <div className="mapContainer">
                    <div id='map'></div>
                </div>

            </div>
        )
    }

}

export default Details;
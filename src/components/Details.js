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
        let rand = Math.random();
        let names = ["Andrew Paul Rogers", "Stephanie Rose Springer"];
        let firstName = (rand > 0.5) ? names[0] : names[1];
        let secondName = (rand > 0.5) ? names[1] : names[0];
        return(
            <div id="Details" className="text-left">
                <div className="text-center">
                    <h3 className="serifText">Just the Facts</h3>
                </div>
                <p>
                    {firstName}&nbsp;&amp;&nbsp;{secondName}
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
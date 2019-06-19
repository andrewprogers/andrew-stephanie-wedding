import React from 'react';
import DetailItem from './DetailItem';

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
        var el = document.createElement('div');
        el.className = 'marker';

        new window.mapboxgl.Marker(el)
            .setLngLat([-122.947400, 38.408261])
            .addTo(map);
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
                    <h3 className="serifText">We're getting married and you're invited to our celebration!</h3>
                </div>
                <br />
                
                <DetailItem title="Who" item="Andrew and Stephanie" description="We met hiking the John Muir Trail through the Sierras in September of 2016. Our wedding date of September 14th will mark 3 years to the day of when we met on trail!" />

                <DetailItem title="Where" item="The Union Hotel" description="
                    Occidental, California is a wonderful little town with an outdoor amphitheater in the redwoods for our ceremony. 
                    There is no parking at the amphitheater so we will shuttle guests from the hotel parking lot nearby. 
                    The site has uneven ground so we recommend appropriate footwear!" />

                <DetailItem title="Address" item="3731 Main Street, Occidental, CA" description="Meet and park here for the ceremony shuttle" />

                <DetailItem title="When" item="5:00PM on Saturday, September 14th" 
                    description="Please arrive between 4:00-4:45PM to allow time for shuttling everyone to the amphitheater" />

                <DetailItem title="Reception" item="" 
                    description="An appetizer will be served following the ceremony before guests are shuttled back to the Hotel. A family style Italian dinner will be served at the hotel ballroom followed by cake and dancing until 10:30. Night owls are welcome to join us at the hotel bar for some after party drinks." />

                <DetailItem title="Getting There" item="" description="San Francisco and Oakland airports are closest and Sacramento is a third option. 
                    Unfortunately, Occidental is not accessible by public transit so you'll need access to a car.
                    Please indicate on the RSVP form if you would be interested in carpooling or sharing a rental car with another guest." />

                <DetailItem title="Lodging" item="" description="The Inn at Occidental is a nearby affordable option. There are also several Airbnb's in town. More options are located in the nearby cities of Sebastopol and Santa Rosa. " />

                <div className="mapContainer">
                    <div id='map'></div>
                </div>

            </div>
        )
    }

}

export default Details;
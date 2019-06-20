import React from 'react';
import redwoods from '../photos/redwoods.jpg'
import bocce from '../photos/bocce.jpg'
import lake from '../photos/lake.jpg'




class Explore extends React.Component {
    render() {
        return(
            <div id="Explore" className="text-left">
                <h3 className="serifText text-center">Things to do in Sonoma</h3>
                <p>
                    Of all of the places we could have chosen to get married, we were most excited for Sonoma County where Stephanie grew up. If you make it out to our wedding, we hope you take advantage of your time in this beautiful area! Below are some suggestions for places and spaces that are meaningful to us.
                </p>

                

                <h5 className="serifText">"The Drive"</h5>
                <p>
                    This day trip has been taken so frequently that it gets it's own name and space here. Any piece is wonderful on its own, or take a day to really see the scenery. 
                </p>
                <img src={redwoods} className=""></img>
                <ul>
                    <li className="tripItem">
                        <a href="https://www.sonomacounty.com/wineries/korbel-champagne-cellars" target="_blank" className="tripLink">Korbel Champagne Cellars</a> - Tasting, tours, and a cafe
                    </li>
                    <li className="tripItem">
                        <a href="https://www.parks.ca.gov/?page_id=450" target="_blank" className="tripLink">Armstrong Redwoods</a> - State park with wonderful trails through the redwoods
                    </li>
                    <li className="tripItem">
                        <a href="http://www.duncansmills.net/" target="_blank" className="tripLink">Duncans Mills</a> - Shops and restaurant
                    </li>
                    <li className="tripItem">
                        <a href="https://www.sonomacounty.com/articles/highlights-sonoma-coast" target="_blank" className="tripLink">The Sonoma Coast</a> - Many stops as you head south down Route 1. We recommend Goat Rock and Salmon Creek beaches, and the pink and white striped salt water taffy store. The Tides is another iconic gift store and restaurant stop.
                    </li>
                    <li className="tripItem">
                        <a href="https://www.google.com/maps/place/Sebastopol,+CA+95472/data=!4m2!3m1!1s0x808424cd76e3686f:0x2b7bf31174c69208?sa=X&ved=2ahUKEwj_tZu7vPTiAhUBT98KHcgRCf8Q8gEwFnoECA0QBA" target="_blank" className="tripLink">Bodega and Sebastopol</a> - You'll cut East on Bodega Hwy to head back towards Santa Rosa. Hitchcock fans can visit sites used in 'The Birds' in Bodega
                    </li>
                    <li className="tripItem">
                        <a href="http://www.screaminmimisicecream.com/" target="_blank" className="tripLink">Screamin' Mimis</a> - End the road trip with the best ice cream around! Located in Sebastopol, this is a wonderful small-town ice cream shop
                    </li>
                </ul>

                <h5 className="serifText">"Wine" Tasting</h5>
                <p>
                    What is a visit to Sonoma without wine? There are hundreds of wineries to visit. Our favorites include:
                </p>
                <img src={bocce} className=""></img>
                <ul>
                    <li className="tripItem">
                        <a href="https://www.hookandladderwinery.com/" target="_blank" className="tripLink">Hook &amp; Ladder</a> - Mostly for the outdoor bocci court!
                    </li>
                    <li className="tripItem">
                        <a href="https://www.chateaustjean.com/" target="_blank" className="tripLink">Chateau St Jean</a> and other Kenwood Wineries - For the scenery 
                    </li>
                    <li className="tripItem">
                        <a href="https://russianriverbrewing.com/" target="_blank" className="tripLink">Russian River Brewery</a> - If Beer is more your thing!
                    </li>

                </ul>

                <h5 className="serifText">Other Sites</h5>
                <img src={lake} className=""></img>
                <ul>
                    <li className="tripItem">
                        <a href="https://schulzmuseum.org/" target="_blank" className="tripLink">The Charles Shultz Museum</a> - A must-see for Peanuts fans (located in Santa Rosa)
                    </li>
                    <li className="tripItem">
                        <a href="http://parks.sonomacounty.ca.gov/Visit/Spring-Lake-Regional-Park/" target="_blank" className="tripLink">Spring Lake Park</a> - Great place for a walk in Santa Rosa
                    </li>
                    <li className="tripItem">
                        <a href="https://www.nps.gov/pore/index.htm" target="_blank" className="tripLink">Point Reyes National Seashore</a> - Great area for exploration and day hikes
                    </li>

                </ul>
            </div>
        )
    }

}

export default Explore;
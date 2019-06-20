import React from 'react';

class Gifts extends React.Component {
    render() {
        return(
            <div id="Gifts" className="text-left">
                <div className="text-center">
                    <h3 className="serifText">Wedding Gifts</h3>
                </div>

                <p>
                    Below is a link to our registry where we have compiled a small number of physical gifts along with our honeymoon fund. While we know it is tradition to bring a physical gift to a wedding, we are not in need of much and are also traveling across the country for the occasion.
                </p>

                <div className="registryLink text-center">
                    <a href="http://www.zola.com/registry/andrewandstephanieseptember14" target="_blank" >
                        <span className="">
                            Our Registry
                        </span>
                    </a>
                </div>

                <br />
                
                <p>
                    There will be a basket for cards available, but if you'd like to gift us something, please have it sent to our address in Boston:
                </p>
                <br />
                <div className="text-center">
                    <span className="address text-left">
                        <hr />
                        <em>
                            Andrew Rogers &amp; Stephanie Springer
                            <br />11 Sheridan St #3
                            <br />Jamaica Plain, MA 02130
                        </em>
                        <hr />
                    </span>
                </div>


                <br />
                <p>The best gift will truly be getting all of our wonderful friends and family together in the same place!</p>

                
            </div>
        )
    }

}

export default Gifts;





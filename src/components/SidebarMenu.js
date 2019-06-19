import React from 'react';

const MenuItem = ({text, selectedPage, selectPage}) => {
    return(
        <span 
            onClick={() => selectPage(text)}
            className={selectedPage === text ? "selected" : ""}>
            {text}
        </span>
    )
}

const SidebarMenu = ({visible, selectedPage, selectPage}) => {
    if (visible == true) {
        return(
            <div id="SidebarMenu">
                <MenuItem text={"Details"} selectedPage={selectedPage} selectPage={selectPage}/>|
                <MenuItem text={"RSVP"} selectedPage={selectedPage} selectPage={selectPage}/>|
                <MenuItem text={"Gifts"} selectedPage={selectedPage} selectPage={selectPage}/>|
                <MenuItem text={"Explore"} selectedPage={selectedPage} selectPage={selectPage}/>
            </div>
        )
    } else {
        return null;
    }

}

export default SidebarMenu;
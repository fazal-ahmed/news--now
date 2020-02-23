import React from 'react';
import Navcontent from './Navcontent';

function Nav(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><h2 className="font">NEWS*NOW</h2></a>
            <Navcontent getRegion={props.getRegion} />
        </nav>
    )
}
export default Nav;

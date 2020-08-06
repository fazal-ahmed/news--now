import React from 'react';
import { NavLink } from 'react-router-dom';


function List(props) {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <NavLink to="/"><a className="nav-link" href="#"><h6 className="colour">HOME</h6></a></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/bbc"><a className="nav-link" href="#"><h6 className="colour">BBC</h6></a></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/al-jazeera-english"><a className="nav-link" href="#"><h6 className="colour">AL-JAZEERA-ENGLISH</h6></a></NavLink>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="#"><h6 className="colour">SPORTS</h6></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><h6 className="colour">POLITICES</h6></a>
            </li> */}
        </ul>
    )
}
export default List;

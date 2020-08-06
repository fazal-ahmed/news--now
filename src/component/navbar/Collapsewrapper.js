import React from 'react';
import List from './List';
import Form from './Form';
import Dropdown from './Dropdown';

function Collapsewrapper(props) {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Dropdown getRegion={props.getRegion}  />
            <List/>
            <Form/>
        </div>
            )
}
export default Collapsewrapper;
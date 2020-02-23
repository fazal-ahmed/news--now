import React from 'react';
import Collapsewrapper from './Collapsewrapper';
import Button from './Button';

function Navcontent(props){
    return(
        <React.Fragment>
        <Button/>
        <Collapsewrapper getRegion={props.getRegion} />
        </React.Fragment>
    )
}
export default Navcontent;
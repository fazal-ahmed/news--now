import React from 'react';

function Button(){
    return(
        <React.Fragment>
        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        </React.Fragment>
    )
}
export default Button;
import React, { useState } from 'react';

function Dropdown(props) {
    const [name, setName] = useState("IND")
    function handleClick(e){
        setName(e.target.innerText)
        props.getRegion(e.target.innerText.toLowerCase())
    }
    return (
        <div class="dropdown">
            <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">{name}</button>
            <div class="dropdown-menu dropdown-primary">
                <a class="dropdown-item" onClick={handleClick} href="#">AU</a>
                <a class="dropdown-item" onClick={handleClick} href="#">US</a>
                <a class="dropdown-item" onClick={handleClick} href="#">IN</a>
                <a class="dropdown-item" onClick={handleClick} href="#">DE</a>
            </div>
        </div>
    )
}
export default Dropdown;
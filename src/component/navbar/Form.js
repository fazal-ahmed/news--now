import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Form() {
const [keyword,setKeyword] = useState('')
console.log(keyword)
    return (
        <form className="form-inline my-2 col-lg-4">
            <input className="form-control mr-sm-2 col-md-8" onChange={(e) => {setKeyword(e.target.value)}} aria-label="Search" />
            <NavLink to={`/search/${keyword}`}><button className="btn btn-outline-light my-2 my-sm-0" type="search" placeholder="Search"  type="submit">Search</button></NavLink>
        </form>
    )
}
export default Form;
import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <h1>Get all countries</h1>
            <div className='header-links'>
                <h3><Link to='/'>Home</Link></h3>
                <h3><Link to='/countries'>Countries</Link></h3>
            </div>
        </div>
    )
}

export default Header
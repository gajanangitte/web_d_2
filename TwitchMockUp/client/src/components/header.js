import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className='ui secondary pointing menu'>
            
            <Link to='/' className='item'>
                Steamy
            </Link>
            <div className='right menu'>

                <Link to='/' className='item'>
                    All Steams
                </Link>

            </div>
        </div>
    )
}

export default Header

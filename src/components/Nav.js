import React from 'react'
import {Link} from 'react-router-dom'
 

const Nav = () => {

    return(
        <div className='navbar'>
            <ul className='navul'>
                <li className='link'><Link to='/'>Home</Link></li>  
                <li className='link'><Link to='/Movies'>Movies</Link></li> 
                <li className='link'><Link to='/Shows'>Show</Link></li> 
            </ul>
           
        </div>
    )

}

export default Nav
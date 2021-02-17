import React from 'react'
import {Link} from 'react-router-dom'

function MyNav(props) {

     let buttonStyle = {marginLeft: '10px'}

    return (

        <nav>
            <Link style={buttonStyle} to="/">Quotes</Link>
            <Link style={buttonStyle} to="/add-quote">Add Quote</Link>
            <Link style={buttonStyle}to="/sign-in">Sign In</Link>
            <Link style={buttonStyle}to="/sign-up">Sign Up</Link>
            <button onClick={props.onLogout}>Logout</button>
        </nav>
    
    )
}

export default MyNav
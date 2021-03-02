import React from 'react'
import {Link} from 'react-router-dom'

function MyNav(props) {

     let buttonStyle = {marginLeft: '10px'}

    return (

        <nav>
            <Link style={buttonStyle} to="/">Home</Link>
            <Link style={buttonStyle} to="/add-quote">Add Quote</Link>
            <Link style={buttonStyle} to="/user-quotes">Profile</Link>
            {
                props.loggedInUser ? (
                    <button style={buttonStyle} onClick={props.onLogout}>Logout</button>
                ) : (
                    <div>
                        <Link style={buttonStyle} to="/sign-in">Sign In</Link>
                        <Link style={buttonStyle} to="/sign-up">Sign Up</Link> 
                    </div>      
                )
            }
        </nav>
    
    )
}

export default MyNav
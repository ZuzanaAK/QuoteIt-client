import React from 'react'
import {Link} from 'react-router-dom'
import '../components/scss/MyNav.scss'

function MyNav(props) {

    return (

        <nav class="nav">
            <ul class="menu-nav">
                <li class="menu-nav_item">
                    <Link class="menu-nav_link active" to="/">Home</Link>
                </li>
                <li>
                    <Link class="menu-nav_link" to="/add-quote">Add Quote</Link>
                </li>
                <li>
                    <Link class="menu-nav_link" to="/user-quotes">Profile</Link>
                </li>
            {
                props.loggedInUser ? (
                    <button className="buttonStyle" onClick={props.onLogout}>Logout</button>
                ) : (
                    <nav>
                        <ul>
                            <li>
                                <Link class="menu-nav_link" to="/sign-in">Sign In</Link>
                            </li>
                            <li>
                                <Link class="menu-nav_link" to="/sign-up">Sign Up</Link>
                            </li> 
                        </ul>
                    </nav>      
                )
            }
            </ul>
        </nav>
    
    )
}

export default MyNav
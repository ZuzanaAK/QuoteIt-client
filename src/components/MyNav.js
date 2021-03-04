import React from 'react'
import {Link} from 'react-router-dom'
import "../components/scss/main.scss"

function MyNav(props) {

    return (
        <div>
            <nav role="navigation">
                <div id="menuToggle">
                
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                    
                        <Link class="menu-nav_link active" to="/"><li>Home</li></Link>
                   
                        <Link class="menu-nav_link" to="/add-quote"><li>Add Quote</li></Link>
               
                        <Link class="menu-nav_link" to="/user-quotes"><li>Profile</li></Link>
                  
                    {
                        props.loggedInUser ? (
                            <button className="buttonStyle" onClick={props.onLogout}><li>Logout</li></button>
                        ) : (
                            <nav>
                                <ul >
                                    <Link id="SignInAndUp" class="menu-nav_link" to="/sign-in"><li>Sign In</li></Link>
                                    <Link id="SignInAndUp" class="menu-nav_link" to="/sign-up"><li>Sign Up</li></Link>
                                </ul>
                            </nav>      
                        )
                    }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MyNav
import React from 'react'
import {Link} from 'react-router-dom'
import "../components/scss/main.scss"
import logo from "./bitmap3.png"

function MyNav(props) {

    return (
        <div className="MyNav">
            <nav role="navigation">
                <div id="menuToggle">

                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                    
                        <Link className="menu-nav_link active" to="/"><li>Home</li></Link>
                   
                        <Link className="menu-nav_link" to="/add-quote"><li>Add Quote</li></Link>
               
                        <Link className="menu-nav_link" to="/user-quotes"><li>Profile</li></Link>
                  
                    {
                        props.loggedInUser ? (
                            <button className="LogoutButton" onClick={props.onLogout}><li>Logout</li></button>
                        ) : (
                            <nav>
                                <ul >
                                    <Link id="SignInAndUp" className="menu-nav_link" to="/sign-in"><li>Sign In</li></Link>
                                    <Link id="SignInAndUp" className="menu-nav_link" to="/sign-up"><li>Sign Up</li></Link>
                                </ul>
                            </nav>      
                        )
                    }
                    </ul>
                </div>
                
            </nav>
            <div className="ImgContainerMobile">
                <Link to="/"><img className="ImgLogo" alt="logoImage" src={logo}/></Link>
            </div>



        <nav>
            <div class="NavBarPc">

                    <ul>
                    
                        <Link className="menu-nav_link active" to="/"><li>Home</li></Link>
                   
                        <Link className="menu-nav_link" to="/add-quote"><li>Add Quote</li></Link>
               
                        <Link className="menu-nav_link" to="/user-quotes"><li>Profile</li></Link>
                  
                    {
                        props.loggedInUser ? (
                           
                                <button className="LogoutButton" onClick={props.onLogout}><li>Logout</li></button>
                          
                        ) : (
                            
                                <ul className="SignInUpNavCont">
                                    <Link id="SignInAndUp" className="menu-nav_link" to="/sign-in"><li>Sign In</li></Link>
                                    <Link id="SignInAndUp" className="menu-nav_link" to="/sign-up"><li>Sign Up</li></Link>
                                </ul>
                                  
                        )
                    }
                    </ul>
                    <Link to="/"><img className="ImgLogo" alt="logoImage" src={logo}/></Link>
                </div>
               
                    
                
            </nav>
        
        </div>
    )
}

export default MyNav
import React from 'react';
import "../components/scss/main.scss"

export default function SignUp(props){
    return (
        <div className="SignUpComponent">
            <form onSubmit={props.onSignUp}>
                <div className="SignUpCompContainer">
                    <label><h4>USERNAME</h4></label>
                    <input type="text" name="username" />
         
                    <label><h4>EMAIL ADDRESS</h4></label>
                    <input type="email" name="email" />
                    <small>We'll never share your email with anyone else.</small>
  
                    <label ><h4>PASSWORD</h4></label>
                    <input name="password" type="password"/>
                
                    <button className="SubmitButton" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
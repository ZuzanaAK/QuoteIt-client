import React from 'react';
import "../components/scss/main.scss"

export default function SignIn(props){
    return (
        <div className="SignInComponent">
            <form onSubmit={props.onSignIn}>
                <div className="SignInCompContainer">
                    <label><h4>EMAIL ADDRESS</h4></label>
                    <input type="email" name="email"/>

                    <label><h4>PASSWORD</h4></label>
                    <input name="password" type="password" />
                
                    <button className="SubmitButton" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
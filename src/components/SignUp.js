import React from 'react';
import "../components/scss/main.scss"

export default function SignUp(props){
    return (
        <form onSubmit={props.onSignUp}>
            <div>
                <label>Username</label>
                <input type="text" name="username" />
            </div>
            <div>
                <label>Email address</label>
                <input type="email" name="email" />
                <small>We'll never share your email with anyone else.</small>
            </div>
            <div>
                <label >Password</label>
                <input name="password" type="password"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
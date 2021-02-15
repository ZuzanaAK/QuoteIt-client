import React from 'react';

export default function SignIn(props){
    return (
        <form onSubmit={props.onSignIn}>
            <div>
                <label>Email address</label>
                <input type="email" name="email"/>
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
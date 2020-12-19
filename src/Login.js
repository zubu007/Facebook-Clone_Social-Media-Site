import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer'


function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        // sign in..
        auth.signInWithPopup(provider).then(result =>{
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            }) 
            console.log(result)
        }).catch((error) => alert(error.message))
    }

    return (
        <div className='login' >
            <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Penguin_logo.svg/1200px-Penguin_logo.svg.png" />
                
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login

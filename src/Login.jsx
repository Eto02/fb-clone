import { Button } from '@material-ui/core'
import './Login.css'
import {auth, provider} from './firebase'
import { actionType } from './config/redux/reducer'
import { useDispatch } from 'react-redux'

function Login() {
    const dispatch = useDispatch()    
    
    const signIn=()=>{
      
        auth
        .signInWithPopup(provider)
        .then((res)=>{
            dispatch({type:actionType.SET_USER,user:res.user})
        })
        .catch((err)=>alert(err.message))
    }

    return (
     
        <div className={'login'}>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}


export default Login;

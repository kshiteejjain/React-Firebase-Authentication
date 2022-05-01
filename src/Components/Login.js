import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import{auth} from "../Firebase-Config";
import { useCookies } from 'react-cookie';

function Login() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [curUser, setCurUser] = useState({});
    const [showLoginComp, setShowLoginComp] = useState(false);
    const [data, setData] = useState('');
    const [authCookies, setAuthCookie] = useCookies(['access_token', 'refresh_token'])

    onAuthStateChanged(auth, (currentUser) => {
        setCurUser(currentUser);
        setShowLoginComp(true);
        //navigate("/");
    })

    const login = async (e) =>{
        e.preventDefault();
        try{
        const registerUser = await signInWithEmailAndPassword(
            auth, 
            email, 
            password);
        console.log(registerUser);
        setAuthCookie('access_token', curUser.accessToken);
        setAuthCookie('refresh_token', curUser.stsTokenManager.refreshToken);
        navigate("/");
        } catch(error){
            console.log(error.message)
        }
    }

    useEffect( () => {
        console.log('Login Page called');
      },[]);

    // const logout = async () =>{

    // }

    return (
        <>
            <div className="login-page">
                {/* Logged in from: {curUser?.email} */}
                <form onSubmit={login}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <input type='email' onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type='password' onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <Link to="/Register" className="registerBtn"> Register </Link>
                </form>
                
            </div>
        </>
    );
}

export default Login;

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase-Config";
import { useCookies } from 'react-cookie';

function Register() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const navigate = useNavigate();
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const register = async (e) => {

        e.preventDefault();
        try {
            const registerUser = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword);
                setRegisterSuccess(true);
                e.target.reset();
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <div className="login-page">
                <form onSubmit={register}>
                    <h2>Register</h2>
                    <div className="form-group">
                        <input type='email' onChange={e => setRegisterEmail(e.target.value)} className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type='password' onChange={e => setRegisterPassword(e.target.value)} className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                    {registerSuccess ? <p>Registration Succesful, Please click to <Link to="/Login" className="registerBtn"> Login </Link></p> : null}
                    
                </form>
            </div>
            </>
            );
}


export default Register;
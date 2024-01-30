import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                alert("User login successful")
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='form_container'>
            <h2 className='form_title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form_control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form_control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form_control'>
                    <input className='btn_submit' type="submit" value="Login" />
                </div>
            </form>
            <p className='signUp_login_toggle'>
                <small>New to Ema John <Link to="/signUp">Create new account</Link>
                </small>
            </p>
        </div>
    );
};

export default Login;
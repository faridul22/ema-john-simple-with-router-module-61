import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const { user, } = useContext(AuthContext);
    console.log(user)

    return (
        <div className='form_container'>
            <h2 className='form_title'>Login</h2>
            <form>
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
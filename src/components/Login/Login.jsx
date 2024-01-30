import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
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
                <small>Already have an account <Link to="/signUp">Login</Link>
                </small>
            </p>
        </div>
    );
};

export default Login;
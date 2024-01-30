import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [error, setError] = useState(null)

    const handleSignUp = event => {
        event.preventDefault();
        setError("")
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;


        if (password !== confirm) {
            setError("Your password and confirm password are not match");
            return
        }
        else if (password.length < 6) {
            setError("Your password must be 6 characters");
            return
        }
        console.log(email, password, confirm)
    }

    return (
        <div className='form_container'>
            <h2 className='form_title'>SignUp</h2>
            <form onSubmit={handleSignUp}>
                <div className="form_control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form_control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form_control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <div className='form_control'>
                    <input className='btn_submit' type="submit" value="SignUp" />
                </div>
            </form>
            <p className='signUp_login_toggle'>
                <small>Already have an account <Link to="/login">Login</Link>
                </small>
            </p>
            <p className='error_text'>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default SignUp;
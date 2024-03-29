import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error) })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">SignUp</Link>
                {user && <span className='text_white'>{user.email} <button onClick={handleLogOut}>LogOut</button></span>}
            </div>
        </nav>
    );
};

export default Header;
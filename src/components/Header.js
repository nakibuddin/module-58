import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleSignOut = () => {
        logOut()
        .then( () => {})
        .catch(error => console.error('error: ', error));
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>daisyUI</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user?.uid ? 
                    <div>
                        {user?.email && <span>Welcome, {user.email}</span>}                   
                        <button onClick={handleSignOut} className="btn btn-sm">Log out</button>             
                    </div>
                    :
                    <Link to='login'> <button className="btn btn-sm">Log in</button> </Link>
                }                
            </div>
        </div>
    );
};

export default Header;
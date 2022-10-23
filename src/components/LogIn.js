import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const LogIn = () => {
    const {signIn} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;        
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
        .then(result => {
            console.log(result.user);
            event.target.reset();
            navigate('/');
        })
        .catch(error => console.error('error: ', error));

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-5">Please login now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        
                        <form onSubmit={handleLogIn} className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">                                    
                                    <button type='button' className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>

                            <Link to='/register' className="label-text-alt link link-hover">New to this website?</Link>

                            {/* <button type='button'  className="btn btn-primary mt-5">Log in with google</button> */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            event.target.reset();
        })
        .catch(error => console.error('error: ', error));
    }

    const handleGoogleLogIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            navigate('/');
        })
        .catch(error => console.error('error: ', error));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-5">Please register now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                            </div>

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
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>

                            <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>

                            <button type='button' onClick={handleGoogleLogIn} className="btn btn-outline btn-success mt-5">Log in with google</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Register;
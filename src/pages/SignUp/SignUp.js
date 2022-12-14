import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/UserContext';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignup = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value


        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                return alert('Account created successfully')
            })
            .then(err => console.error(err))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={login} alt='login' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href='/' className="label-text-alt link link-hover" >Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const headerMenu = <>
        <li className='font-bold text-2xl'><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-bold text-2xl'><Link to='/orders'>Orders</Link></li>
                    <button className='btn btn-ghost font-bold text-2xl pt-3' onClick={logOut}>Sign Out</button>

                </>
                :
                <>

                    <li className='font-bold text-2xl'><Link to='/login'>Login</Link></li>
                    <li className='font-bold text-2xl'><Link to='/signup'>SignUp</Link></li>
                </>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                        {headerMenu}

                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">Car Service Center</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {headerMenu}

                </ul>

            </div>
            <div className="navbar-end">
                <a href='/' className="btn btn-warning">Get started</a>
            </div>
        </div>
    );
};

export default Header;
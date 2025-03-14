import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
     
    
    const [user,loading,error] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }

     
    const menuItems = <>
        <li className='text-white'><Link to ="/">Home</Link></li>
        <li className='text-white'><Link to ="/blog">Blog</Link></li>
        <li className='text-white'><Link to ="/portfolio">Protofolio</Link></li>

        {
           user && <li className='text-white'><Link to ="/dashboard">Dashboard</Link></li>
        }

        <li className='text-white'>{user ?  <button className="btn btn-ghost " onClick={logout}>Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-indigo-900 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-indigo-900 rounded-box w-52 ">
                    {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-red-500 ">Auto Mart</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {menuItems}
                </ul>
            </div>
            <label tabIndex="1" htmlFor="dashboard-sidebar" className=" text-white btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
          
        </div>
    );
};

export default Navbar;
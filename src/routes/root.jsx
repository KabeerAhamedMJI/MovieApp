import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeLoginStatus } from '../app/features/login/loginSlice';
import { FaTimes, FaBars } from 'react-icons/fa'; // Import the icons

function Root(props) {
    const loggedIn = useSelector(state => state.login.loggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`, { withCredentials: true })
            .then(response => {
                const loginStatus = response.data.verified;
                dispatch(changeLoginStatus(loginStatus));
            })
            .catch(error => {
                dispatch(changeLoginStatus(false));
            });
    }, [dispatch]);

    const Header = ({ loggedIn }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        return (
            <header className='px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8 bg-slate-800'>
                <div className='container mx-auto flex justify-between items-center'>
                    <h1 className='font-bold text-2xl sm:text-3xl text-white'>MovieSpot</h1>
                    <button className='sm:hidden text-white' onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                    <nav className={`${isOpen ? 'block' : 'hidden'} sm:block w-full sm:w-auto mt-4 sm:mt-0`}>
                        <ul className='flex flex-col sm:flex-row items-center gap-4 sm:gap-8'>
                            <li>
                                <Link to="/" className='text-white'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='text-white'>About</Link>
                            </li>
                            <li>
                                <Link to="/" className='text-white'>Movies</Link>
                            </li>
                            <li>
                                <Link to="/" className='text-white'>Actors</Link>
                            </li>
                            <li>
                                <Link to="/" className='text-white'>Contact</Link>
                            </li>
                            <li>
                                <Link to="/signup" className='text-white'>Signup</Link>
                            </li>
                            {loggedIn ? (
                                <li>
                                    <Link to="/logout" className='text-white'>Logout</Link>
                                </li>
                            ) : (
                                <li>
                                    <Link to="/login" className='text-white'>Login</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    };

    return (
        <>
            <Header loggedIn={loggedIn} />

            <main className='container mx-auto p-4 sm:p-6 lg:p-8'>
                <Outlet />
            </main>

            <footer className='px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8 bg-slate-800 text-white text-center'>
                <p>&copy; {new Date().getFullYear()} MovieSpot. All rights reserved.</p>
                <p className='mt-1 text-sm'>Developed by <a href="https://wa.me/9747436459" className='text-teal-400 hover:text-teal-300'>Kabeer Ahamed</a></p>
            </footer>
        </>
    );
}

export default Root;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div>
                    {/* side title */}
                    <h3>Photography Service</h3>
                    {/* nav links */}
                    <div>
                        <Link to='/home'>Home</Link>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='signIn'>Sign in</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
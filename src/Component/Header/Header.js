import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-20 h-[80px]'>
            <div className='text-4xl font-mono font-bold'>HeadPhone Baba</div>
            <div>
                <Link to="/" className='text-2xl font-mono pl-4'>Home</Link>
                <Link to="/" className='text-2xl font-mono pl-4'>Review</Link>
                <Link to="/" className='text-2xl font-mono pl-4'>Dashboard</Link>
                <Link to="/" className='text-2xl font-mono pl-4'>Blogs</Link>
                <Link to="/" className='text-2xl font-mono pl-4'>About</Link>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center md:justify-between items-center px-20 h-[80px] shadow-lg bg-slate-800 text-white'>
            <div className='text-4xl font-mono font-bold hidden md:block'>HeadPhone Baba</div>
            <div>
                <Link to="home" className='md:text-xl font-mono md:pl-4 pl-2'>Home</Link>
                <Link to="review" className='md:text-xl font-mono md:pl-4 pl-2'>Review</Link>
                <Link to="dashboard" className='md:text-xl font-mono md:pl-4 pl-2'>Dashboard</Link>
                <Link to="blogs" className='md:text-xl font-mono md:pl-4 pl-2'>Blogs</Link>
                <Link to="about" className='md:text-xl font-mono md:pl-4 pl-2'>About</Link>
            </div>
        </div>
    );
};

export default Header;
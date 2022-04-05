import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-center md:justify-between items-center px-20 h-[80px] shadow-lg bg-slate-800 text-white'>
            <div className='text-4xl font-mono font-bold hidden md:block'>HeadPhone Baba</div>
            <div className='flex'>
                <CustomLink to="home" className='md:text-xl font-mono md:pl-4 pl-2'>Home</CustomLink>
                <CustomLink to="review" className='md:text-xl font-mono md:pl-4 pl-2'>Review</CustomLink>
                <CustomLink to="dashboard" className='md:text-xl font-mono md:pl-4 pl-2'>Dashboard</CustomLink>
                <CustomLink to="blogs" className='md:text-xl font-mono md:pl-4 pl-2'>Blogs</CustomLink>
                <CustomLink to="about" className='md:text-xl font-mono md:pl-4 pl-2'>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;
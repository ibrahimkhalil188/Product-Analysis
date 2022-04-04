import React from 'react';
import headphone from "../../image/headphone.png"

const HomePage = () => {
    return (
        <div className='flex px-12 pt-6 items-center max-w-7xl'>
            <div className='text-2xl font-mono p-12'>
                <h1 className='text-5xl text-emerald-500 font-mono font-bold pb-12'>Best Headphone for you</h1>
                <p>GH32 is one of the best headphone of this year. This headphone is best selling headphone of our website. you can check review of our customer bellow</p>
            </div>
            <dir>
                <img className='max-w-2xl h-[75vh]' src={headphone} alt="" />
            </dir>
        </div>
    );
};

export default HomePage;
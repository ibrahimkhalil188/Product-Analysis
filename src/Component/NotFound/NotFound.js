import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className='text-2xl px-12'>
                <h1 className='text-7xl'>OPPS!... <br /> ERROR</h1>
                <p>Sorry the page ont found</p>
            </div>
            <div>
                <h1 className='text-9xl'>404</h1>
            </div>
        </div>
    );
};

export default NotFound;
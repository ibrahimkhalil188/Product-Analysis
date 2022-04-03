import React from 'react';
import headphone from "../../image/headphone.png"

const HomePage = () => {
    return (
        <div className='flex'>
            <div>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ab.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus sequi eum impedit quibusdam unde odio! Velit, perferendis quae nihil dolorum similique error veniam obcaecati consequatur nam quaerat laudantium magni!</p>
            </div>
            <dir>
                <img src={headphone} alt="" />
            </dir>
        </div>
    );
};

export default HomePage;
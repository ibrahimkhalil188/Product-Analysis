import React from 'react';
import headphone from "../../image/headphone.png"
import useReviews from '../CustomHook/CustomHook';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [reviews] = useReviews()
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex px-12 pt-12 items-center max-w-7xl '>
                <div className='text-2xl font-mono p-12'>
                    <h1 className='text-5xl text-emerald-500 font-mono font-bold pb-12'>Best Headphone for you</h1>
                    <p>GH32 is one of the best headphone of this year. This headphone is best selling headphone of our website. you can check review of our customer bellow</p>
                </div>
                <div>
                    <img className='max-w-2xl h-[75vh]' src={headphone} alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-5xl font-mono font-bold py-20 text-emerald-500 text-center'>Customer reviews
                </h1>
                <div className='grid grid-cols-3 text-2xl gap-4 bg-slate-900' >
                    {
                        (reviews.slice(0, 3)).map(review =>
                            <div className=' py-20 px-4' key={review.id} >
                                <p className='bg-slate-200 h-[350px] p-4'>{review.review}</p>
                                <div className='bg-emerald-500 relative h-[180px]'>
                                    <img className='w-32 h-32 rounded-full absolute top-[-60px] left-[140px] border-4' src={review.image} alt="" />
                                    <div className='absolute top-20 left-[140px]'>
                                        <h1>{review.name}</h1>
                                        <p className='flex justify-center items-center'>{review.ratings}<AiFillStar className='text-yellow-600'></AiFillStar></p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <p></p>
                    <button onClick={() => navigate("/review")} className='text-2xl text-white border-2 rounded-lg py-4 mb-16'>See more reviews</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
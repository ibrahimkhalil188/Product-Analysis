import React from 'react';
import useReviews from '../CustomHook/CustomHook';
import { AiFillStar } from 'react-icons/ai';
const Reviews = () => {
    const [reviews] = useReviews()
    return (


        <div className='bg-slate-900'>
            <h1 className='text-5xl font-mono font-bold py-20 text-emerald-500 text-center'>Customer reviews
            </h1>
            <div className='grid grid-cols-3 text-2xl gap-4 ' >
                {
                    (reviews).map(review =>
                        <div className='p-6' key={review.id} >
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
            </div>
        </div>
    )
};

export default Reviews;
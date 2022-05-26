import React from 'react';
import annual from '../../images/annual.jpg'
import reviews from '../../images/review.png'
import tools from '../../images/tools.jpg'

const BusinessSummary = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-12 mb-12 pt-12'>
            <div className="card w-80 bg-base-100 pb-12 ">
                <figure><img className='w-60' src={annual} alt="Shoes" />
                </figure>
                <p className='text-center text-2xl'>Annual Revenue</p>
                <h2 className='text-5xl text-center uppercase'>120M+</h2>
               
                

            </div>
            <div className="card w-72  bg-base-100 pt-14 ">
                <figure><img className='w-40' src={reviews} alt="Shoes" /></figure>
                <p className='text-center text-3xl pt-4'>Reviews</p>
                <h2 className='text-5xl text-center uppercase pl-4'>33K+</h2>

            </div>
            <div className="card w-72 bg-base-100 pt-8  ">
                <figure><img className='w-48' src={tools} alt="Shoes" /></figure>
                <p className='text-center text-3xl pr-3'>Tools</p>
                <h2 className='text-5xl text-center uppercase pt-3 pl-3 '>800+</h2>

            </div>
        </div>
    );
};

export default BusinessSummary;
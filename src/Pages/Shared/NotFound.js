import React from 'react';

import notFound from '../../images/notFound.jpg'
const NotFound = () => {
    return (
        <div >
             <h2 className='text-secondary text-5xl text-center font-bold'>Sorry</h2>
            <img className='w-50' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
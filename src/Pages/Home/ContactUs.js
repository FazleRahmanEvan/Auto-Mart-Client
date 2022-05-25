import React from 'react';
import background from '../../images/backgroundimg2.jpg'

const ConntactUs = () => {
    return (
        <div style={{
            background:`url(${background})`
        }} className='bg-primary px-10 py-12  '>
          <div className='text-center pb-14 text-white pb-10'>
            <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary'>
              Contact Us
            </p>
            <h1 className='text-4xl text-primary'>Stay connected with us</h1>
          </div>
          <div className='grid grid-cols-1 justify-items-center gap-5'>
            <input
              type='text'
              placeholder='Email Address'
              className='input w-full max-w-md'
            />
            <input
              type='text'
              placeholder='Subject'
              className='input w-full max-w-md'
            />
            <textarea
              className='textarea w-full max-w-md'
              placeholder='Your message'
              rows={6}
            ></textarea>
           <button className='btn btn-primary uppercase text-white font-bold bg-gradient-to-br from-primary to-secondary'>Submit</button>
          </div>
        </div>
    );
};

export default ConntactUs;
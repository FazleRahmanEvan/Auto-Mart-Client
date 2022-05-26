import React from 'react';
import background from '../../images/bg1.png'
import about from '../../images/about.png'

const AboutAutomart = () => {
    return (
        <div style={{
            background: `url(${background})`
        }} className="hero min-h-screen">

            <div className="hero-content flex-col lg:flex-row-reverse ">

                <img src={about} className=" rounded-lg" alt='' />
                <div>
                    <h1 className="text-5xl "><span className='text-primary'>About</span><span className='text-secondary'> Auto Mart</span></h1>
                    <p className="py-6">Auto Mart an ISO-00000000 certified company is a leading manufacturer in the auto spare parts industry delivering you best in class aftermarket parts. We cater to the exacting requirements of the automotive industry with high-quality parts for trucks, tractors, cars and trailers to name a few.

                        With a spacious infrastructure, computer-aided technology and a great team of engineers and technicians, we provide clients with innovative and cost-efficient automobile parts and OEM parts of excellent quality.</p>
                    <button className='btn btn-primary uppercase text-white font-bold bg-gradient-to-br from-primary to-secondary'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutAutomart;
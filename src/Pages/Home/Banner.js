import React from 'react';
import banner1 from '../../images/banner.jpg'
import banner2 from '../../images/banner 2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full  mb-12">
                <div id="item1" className="carousel-item w-full ">
                    <img src={banner1} className="w-full h-full" alt='' />
                </div>
                <div id="item2" className="carousel-item w-full h-full">
                    <img src={banner2} className="w-full" alt='' />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
            </div>
        </div>
    );
};

export default Banner;
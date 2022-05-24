import React from 'react';
import banner1 from '../../images/banner.jpg'
import banner2 from '../../images/banner 2.jpg'

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full  mb-12">
                <div id="item1" class="carousel-item w-full ">
                    <img src={banner1} class="w-full h-full" alt='' />
                </div>
                <div id="item2" class="carousel-item w-full h-full">
                    <img src={banner2} class="w-full" alt='' />
                </div>

            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
            </div>
        </div>
    );
};

export default Banner;
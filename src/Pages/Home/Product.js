import React from 'react';


const Product = ({ product, setProduct }) => {
    const {_id,name,img,description, available, order, price} = product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='text-lg' >{description}</p>
                <p className='text-lg'><small>Available:{available}</small></p>
                <p className='text-lg'><small>Minimum Order:{order}</small></p>
                <p className='text-lg'><small>Price:${price}</small></p>
                <div class="card-actions">
                    <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>

    );
};

export default Product;



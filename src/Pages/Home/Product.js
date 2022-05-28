import React from 'react';
import {useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const {_id,name,img,description, available, order, price} = product;
    const navigate = useNavigate();

    const navigateToPurchase = id =>{
        navigate(`/product/${id}`);
    }
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='text-lg' >{description}</p>
                <p className='text-lg'><small>Available:{available}</small></p>
                <p className='text-lg'><small>Minimum Order:{order}</small></p>
                <p className='text-lg'><small>Price:${price}</small></p>
                <div className="card-actions">
                    <button  onClick={() => navigateToPurchase(_id)} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-br from-primary to-secondary">Purchase</button>
                </div>
            </div>
        </div>

    );
};

export default Product;

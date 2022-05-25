import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Product from '../Home/Product';
import Footer from '../Shared/Footer';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div>
            <h2 className='text-primary text-4xl text-center font-bold pt-7 pb-12'>Purchase</h2>
            <div class="card  bg-base-100 shadow-xl">
                <figure><img className='w-72' src={product.img} alt=""/></figure>
                <div class="card-body items-center text-center">
                    <h2 className="card-title text-3xl ">{product.name}</h2>
                    <p className='font-bold' >Details:  {product.description}</p>
                    <p className='font-bold'>Available Quantity: {product.available}</p>
                    <p className='font-bold'>Minimum Order: {product.order}</p>
                    <p className='font-bold'>Price: {product.price}</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-br from-primary to-secondary">Purchase Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
       
    );
};

export default Purchase;
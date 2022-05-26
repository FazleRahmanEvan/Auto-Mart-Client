import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Purchase from '../Purchase/Purchase';
import Product from './Product';


const OurProducts = () => {
    const [product, setProduct] = useState ([]);
   const [order,setOrder] = useState(null);
  
    useEffect( ()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [])
  
    return (
        <div className='text-center text-4xl font-bold mt-7 mb-7'>
           <div>
           <h2><span className='text-primary'>Our</span> <span className='text-secondary'>Products</span></h2>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 mb-12'>
           
               {
                product.map(product=> <Product 
                   key={product._id}
                   product ={product}
            
                   ></Product>)
               }
                 
           </div>
        </div>
    );
};

export default OurProducts;
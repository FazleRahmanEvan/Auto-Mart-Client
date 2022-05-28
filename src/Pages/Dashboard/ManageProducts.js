import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirm from './DeleteConfirm';
import ManageProductRow from './ManageProductRow';


const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`

        }


    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='bg-base-300'>
            <div>
        <h2 className="text-2xl my-5">Total Products: {products.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <ManageProductRow
                            key={product._id}
                            product={product}
                            index={index}
                            refetch={refetch}
                            setDeleteProduct={setDeleteProduct}
                        ></ManageProductRow>)
                    }
                </tbody>
            </table>
            {
                deleteProduct && <DeleteConfirm
                    deleteProduct={deleteProduct}
                    refetch={refetch}
                    setDeleteProduct={setDeleteProduct}
                ></DeleteConfirm>
            }
        </div>
    </div>
        </section>
    );
};

export default ManageProducts;
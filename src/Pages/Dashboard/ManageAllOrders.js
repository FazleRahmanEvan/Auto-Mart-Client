import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setManageOrders(data)
                });
        }
    }, [user, navigate])

    if (!manageOrders.length > 0) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Total Orders: {manageOrders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order?.name}</td>
                                <td>{order?.customer}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                                {/* <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <Link to={``}><span className='text-success'>Paid</span></Link>}
                                </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Purchase = () => {

    const [newQuantity, setNewQuantity] = useState('')

    // console.log(parseInt(newQuantity))

    const newparsedQuantity = parseInt(newQuantity)

    const { productId } = useParams()

    const [user] = useAuthState(auth)

    const [product, setProduct] = useState([]);



    const { minOrderQuantity, availableQuantity, pricePerUnit, name } = product

    const minParsedQuantity = parseInt(product.minOrderQuantity)
    const availableParsedQuantity = parseInt(availableQuantity)


    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const handleQuantityChange = (event) => {

        const quantity = event.target.value;
        // console.log(quantity)



        setNewQuantity(quantity)
    }

    const handleQuantity = (event) => {
        event.preventDefault()

        const address = event.target.address.value
        const phone = event.target.phone.value

        const orders = {

            productsName: name,
            userName: user.displayName,
            userEmail: user.email,
            orderQuantity: newparsedQuantity,
            pricePerUnit: pricePerUnit,
            address: address,
            phone: phone,

        }


        // post to server

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(orders)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast('success')
                }
            })


    }
    let showErrorMessage
    if (newparsedQuantity < minParsedQuantity) {
        showErrorMessage = <p className='text-red-500 text-sm absolute'>Please type minimum Order</p>
    }

    if (newparsedQuantity > availableParsedQuantity) {
        showErrorMessage = <p className='text-red-500 text-sm absolute'>Not available</p>
    }


    return (
        <div className='w-2/3 mx-auto'>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content text-left flex-col lg:flex-row bg-indigo-200">
                    <img src={product.img} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>



                        <form onSubmit={handleQuantity} action="">
                            <h1 class="text-3xl font-bold ">{name}</h1>
                            <p class="py-1">Your Name : {user.displayName} </p>
                            <p class="py-1">Your Email : {user.email} </p>
                            <p class="py-1">Minimum order : {minOrderQuantity}</p>
                            <input type="number" name="quantity" placeholder='Type Order Quantity' id="" onChange={handleQuantityChange} required />
                            {showErrorMessage}
                            <br /><br />
                            <p class="py-1">Available order : {availableQuantity} </p>
                            <p class="py-1">Price per Unit : {pricePerUnit} </p><br />
                            <input type="text" name="address" placeholder='Type address' id="" required /><br /><br />
                            <input type="number" name="phone" placeholder='Type phone' id="" required /><br /><br />
                            <input disabled={newparsedQuantity < minParsedQuantity || newparsedQuantity > availableParsedQuantity} class="btn btn-primary uppercase text-white font-bold bg-gradient-to-br from-primary to-secondary text-white" type="submit" value=" Order " />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;

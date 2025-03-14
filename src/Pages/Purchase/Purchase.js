import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState("");
  const [user] = useAuthState(auth);
  const [orderInfo, setOrderInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://auto-mart-server.onrender.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) {
    return <Loading></Loading>;
  }

  const handleIncreaseQuantity = (event) => {
    const newQuantity = orderQuantity + 1;
    product.quantity = product.quantity - 1;
    product.price = 100 * parseInt(newQuantity);
    setOrderQuantity(newQuantity);

    const orders = {
      productsName: product.name,
      userName: user.displayName,
      email: user.email,
      orderQuantity: newQuantity,
      price: product.price,
    };
    setOrderInfo(orders);
  };

  const handleDecreaseQuantity = (event) => {
    const newQuantity = orderQuantity - 1;
    product.quantity = parseInt(product.quantity) - 1;
    product.price = 30 * parseInt(newQuantity);
    setOrderQuantity(newQuantity);

    const orders = {
      productsName: product.name,
      userName: user.displayName,
      email: user.email,
      orderQuantity: newQuantity,
      price: product.price,
    };
    setOrderInfo(orders);
  };
  const handleOrderInfo = (event) => {
    event.preventDefault();
    navigate("/dashboard");
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const quantity = event.target.quantity.value;

    const orders = {
      productsName: product.name,
      userName: user.displayName,
      email: user.email,
      orderQuantity: quantity,
      price: product.price,
      address: address,
      phone: phone,
    };

    // post to server
    fetch("https://auto-mart-server.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.insertedId) {
          toast("success");
        }
      });
  };

  return (
    <div className="w-2/3 mx-auto">
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content text-left flex-col lg:flex-row bg-indigo-200">
          <img
            src={product.img}
            class="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <form onSubmit={handleOrderInfo} action=".">
              <h1 class="text-3xl font-bold ">{product.name}</h1>
              <p class="py-1">Your Name : {user.displayName} </p>
              <p class="py-1">Your Email : {user.email} </p>
              <p>Minimum Order: {product.quantity}</p>
              <div className="flex justify-center items-center">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Type quantity"
                  readOnly
                  value={orderQuantity}
                  className="input input-bordered"
                />

                <PlusIcon
                  onClick={handleIncreaseQuantity}
                  className="w-9 h-9 cursor-pointer ml-3"
                ></PlusIcon>
                <MinusIcon
                  onClick={handleDecreaseQuantity}
                  className="w-9 h-9 cursor-pointer ml-3"
                ></MinusIcon>
              </div>
              <br />
              <br />

              <p class="py-1">Available order : {product.quantity} </p>
              <p class="py-1">Price: {product.price} </p>
              <br />
              <input
                type="text"
                name="address"
                placeholder="Type address"
                id=""
                required
              />
              <br />
              <br />
              <input
                type="number"
                name="phone"
                placeholder="Type phone"
                id=""
                required
              />
              <br />
              <br />
              <input
                class="btn btn-primary uppercase text-white font-bold bg-gradient-to-br from-primary to-secondary text-white"
                type="submit"
                value=" Order "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

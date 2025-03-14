import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L2Sh2I916Plfxg6KHROsnLAWgQLz5if8M4RaIUEzgyzH4AYEAGyEEhqnoNh7HYcHOjB6Z1RJi1tizANefUA7GA300nC3bd8IB"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://auto-mart-server.onrender.com/orders/${id}`;

  const { data: product, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {product.name}</p>
          <h2 className="card-title">Please Pay For {product.productsName}</h2>
          <p>
            Your Product Quantity:{" "}
            <span className="text-orange-600">{product.orderQuantity}</span>{" "}
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm product={product} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

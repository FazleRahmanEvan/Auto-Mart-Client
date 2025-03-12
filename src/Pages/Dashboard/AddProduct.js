import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: product, isLoading } = useQuery("products", () =>
    fetch("https://auto-mart-server.vercel.app.com/product").then((res) =>
      res.json()
    )
  );

  const imageStorageKey = "27b1fb2656d4acf6262cbfd6e2dde40f";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const parts = {
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            order: data.order,
            img: img,
          };
          fetch("https://auto-mart-server.vercel.app.com/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(parts),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Parts added successfully");
                reset();
              } else {
                toast.error("failed to add the parts");
              }
            });
        }
        // console.log('imgbb', result)
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="flex justify-center mt-6 bg-base-300">
      <div>
        <h2 className="text-2xl mb-4 font-bold">
          <span className="text-primary">Add</span>{" "}
          <span className="text-secondary">New Product</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true.valueOf,
                  message: "Name is Required",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Product Description"
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true.valueOf,
                  message: "Description is Required",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-number">price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              className="input input-bordered w-full max-w-xs"
              {...register("price", {
                required: {
                  value: true.valueOf,
                  message: "Price is Required",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-number">Available Quantity</span>
            </label>
            <input
              type="number"
              placeholder="quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("Quantity", {
                required: {
                  value: true.valueOf,
                  message: "Quantity is Required",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-number">Minimum Order</span>
            </label>
            <input
              type="number"
              placeholder="order"
              className="input input-bordered w-full max-w-xs"
              {...register("order", {
                required: {
                  value: true.valueOf,
                  message: "Order is Required",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true.valueOf,
                  message: "Image is Required",
                },
              })}
            />
          </div>

          <input
            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-br from-primary to-secondary mt-5"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;

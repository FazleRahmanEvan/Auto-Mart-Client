import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ReviewAdd = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
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
          const review = {
            name: data.name,
            rating: data.rating,
            comment: data.comment,
            img: img,
          };
          // send to your database
          fetch("https://auto-mart-server.vercel.app.com/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Review Added successfully");
                reset();
              } else {
                toast.error("Failed to add the review");
              }
            });
        }
        console.log("imagebb result", result);
      });
  };
  return (
    <section className="flex justify-center mt-12">
      <div>
        <h2 className="text-2xl text-center text-accent">Please Review Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="number"
              min={1}
              max={5}
              placeholder="Ratings 1 - 5"
              className="input input-bordered w-full max-w-xs"
              {...register("rating", {
                required: {
                  value: true,
                  message: "Rating is Required",
                },
              })}
            />
            <label className="label">
              {errors.rating?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.rating.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Comment</span>
            </label>
            <input
              type="text"
              placeholder="Comment here..."
              className="input input-bordered w-full max-w-xs"
              {...register("comment", {
                required: {
                  value: true,
                  message: "Comment is Required",
                },
              })}
            />
            <label className="label">
              {errors.comment?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.comment.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input
              type="file"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="uppercase text-white font-bold bg-gradient-to-br from-primary to-secondary w-full max-w-xs"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </section>
  );
};

export default ReviewAdd;

import React from "react";
import { toast } from "react-toastify";

const DeleteConfirm = ({ deleteProduct, refetch, setDeleteProduct }) => {
  const { name, _id } = deleteProduct;

  const handleDelete = () => {
    fetch(`https://auto-mart-server.onrender.com/product/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Product: ${name} has been deleted.`);
          setDeleteProduct(null);
          refetch(); // Refresh the UI
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred while deleting the product.");
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure want to delete?
          </h3>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;

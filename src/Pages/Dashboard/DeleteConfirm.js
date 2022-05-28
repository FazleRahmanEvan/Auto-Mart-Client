import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { name, email } = deleteProduct;

    const handleDelete = () => {
        fetch(`http://localhost:5000/product/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`);
                    setDeleteProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            {/* <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure want to delete?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirm;
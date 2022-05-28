import React from 'react';

const ManageProductRow = ({ product, index, setDeleteProduct }) => {
    const { name, description, price, minQuantity, availableQuantity, img } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
       
            <td>
                <label onClick={() => setDeleteProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ManageProductRow;
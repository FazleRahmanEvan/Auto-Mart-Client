// import React from 'react';
// import { useForm } from "react-hook-form";
// import { useQuery } from "react-query";
// import Loading from '../Shared/Loading';
// import { toast } from 'react-toastify';

// const AddProduct = () => {
//     const { register, formState: { errors }, handleSubmit,reset } = useForm();

//     const { data: product, isLoading } = useQuery('services', () => fetch('http://localhost:5000/product').then(res => res.json()))

//     const imageStorageKey ='1177aebbaa41e7aa0ef8e79e5d225ced'

//     const onSubmit = async data => {
//      const image = data.image[0];
//      const formData = new FormData();
//      formData.append('image',image);
//        const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
//        fetch(url,{
//            method:'POST',
//            body: formData
//        })
//     .then(res => res.json())
//     .then(result =>{
//         if(result.success){
//             const img =result.data.url;
//             const parts ={
//                 name: data.name,
//                 email:data.email,
//                 specialty: data.specialty,
//                 img:img
//             }
//             fetch('http://localhost:5000/parts',{
//                 method:'POST',
//                 headers:{
//                     'content-type':'application/json',
//                     authorization:`Bearer ${localStorage.getItem('accessToken')}`
//                 },
//                 body:JSON.stringify(parts)
//             })
//             .then(res => res.json())
//             .then(inserted =>{
//               if(inserted.insertedId){
//                   toast.success('Parts added successfully')
//                   reset();
//               }
//               else{
//                   toast.error('failed to add the parts');
//               }
//             })
//         }
//         // console.log('imgbb', result)
//     })
//     }
//     if (isLoading) {
//         return <Loading></Loading>
//     }
//     return (
//         <div>
//         <h2 className="text-2xl">Add New Product</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>

//             <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                     <span className="label-text">Name</span>
//                 </label>
//                 <input type="text"
//                     placeholder="Product Name"
//                     className="input input-bordered w-full max-w-xs"
//                 />
               
//             </div>

//             <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                     <span className="label-text">Description</span>
//                 </label>
//                 <input type="text"
//                     placeholder="Product Description"
//                     className="input input-bordered w-full max-w-xs"
//                 />
               
//             </div>


//             <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                     <span className="label-number">price</span>
//                 </label>
//                 <input type="number"
//                     placeholder="price"
//                     className="input input-bordered w-full max-w-xs"
//                 />
//             </div>

//             <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                     <span className="label-number">Available Quantity</span>
//                 </label>
//                 <input type="number"
//                     placeholder="quantity"
//                     className="input input-bordered w-full max-w-xs"
//                 />
//             </div>

//             <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                     <span className="label-number">Minimum Order</span>
//                 </label>
//                 <input type="number"
//                     placeholder="order"
//                     className="input input-bordered w-full max-w-xs"
//                 />
//             </div>
        

//             <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                     <span className="label-text">Photo</span>
//                 </label>
//                 <input type="file"
//                     className="input input-bordered w-full max-w-xs"
//                     {...register("image", {
//                         required: {
//                             value: true.valueOf,
//                             message: 'Image is Required'
//                         }
//                     })} 
//                 />
              
//             </div>


//             <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
//         </form>
//     </div>
//     );
// };

// export default AddProduct;
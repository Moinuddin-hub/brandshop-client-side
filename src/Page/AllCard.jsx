// import React from 'react';
// import Swal from 'sweetalert2';

// const AllCard = () => {
    // const{_id,brandName,description,name,photo,price,rating,type}=item;

    // const handleDelete=(_id)=>{
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
      
    //           fetch(`http://localhost:5000/products/${_id}`,{
    //             method: "DELETE",
    //           })
    //           .then(res=>res.json())
    //           .then((data)=>{
    //             console.log(data)
    //             if(data.deletedCount >0){
    //                 Swal.fire(
    //                     'Deleted!',
    //                     'Your file has been deleted.',
    //                     'success'
    //                   )
    //             }
    //           })
    //         }
    //       })
    // }
    // return (
        // <div>
//         <div className="card card-compact w-82 h-full shadow-xl">
//             <h2 className="text-2xl font-bold text-center py-4">{type}</h2>
//   <figure><img src={photo} alt="Shoes" className='w-full h-40' /></figure>
//   <div className="card-body">
//      <div className=" flex justify-between">
//        <div>
//        <h2 className="text-2xl font-bold">{brandName}</h2>
//       <h2 className="card-title">{name}</h2>
//        </div>
          
//           <div>
//           <h2 className="card-title">Price:{price}</h2>
//      <h2 className="card-title">Rating:{rating}</h2>
//           </div>
//      </div>
//     <p className='text-2xl font-bold'>{description}</p>
//     <div className="card-actions justify-end">
//       <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
//     </div>
//   </div>
// </div>
//         </div>
{/* <>
   <h2>Hello</h2>
</>
    );
};

export default AllCard; */}
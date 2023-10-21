
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const products=useLoaderData();
   
    const{_id,brandName,name,photo,price,rating,type}=products;
//    console.log(product);
    const handleUpdate=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const brandName=form.brand.value;
        const type=form.type.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const photo=form.photo.value;
        const updatedProduct ={name,brandName,type,price,rating,photo};
       console.log(updatedProduct );

       fetch(`http://localhost:5000/products/${products._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct ),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.modifiedCount>0){
              Swal.fire({
                  title: 'success',
                  text: 'Product added successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
          }
        });
   
    }
    return (
        <div className=" w-[900px] lg:w-[1200px] mx-auto bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold  lg:text-center"> Update Product</h2>
        <form onSubmit={handleUpdate}  >
            <div>
            {/* form row */}
            <div className="md:flex md:gap-4 mb-8">

            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Name</span>
              </label>
           <label className="input-group">
      
             <input type="text" name="name" defaultValue={name} placeholder="write name" className="input input-bordered w-full" />
               </label>
                 </div>

                 <div className="form-control w-1/2">
                <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
           <label className="input-group">
          
             <input type="text" name="brand" defaultValue={brandName} placeholder="write your quantity"  className="input input-bordered w-full " />
               </label>
                 </div>
            </div>

              {/* form row */}
              <div className="md:flex md:gap-4 mb-8">
            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Type</span>
              </label>
           <label className="input-group w-full">
              <input type="text" name="type" defaultValue={type} placeholder="write name" className="input input-bordered w-full" />
            
               </label>
                 </div>

                 <div className="form-control w-1/2">
                <label className="label">
                <span className="label-text">Price</span>
              </label>
           <label className="input-group">
          
             <input type="number" name="price" defaultValue={price} placeholder="write your email" className="input input-bordered w-full " />
               </label>
                 </div>
            </div>

              {/* form row */}
              <div className="md:flex md:gap-4 mb-8">
  

                 <div className="form-control w-1/2">
                <label className="label">
                <span className="label-text">Rating</span>
              </label>
           <label className="input-group">
          
             {/* <input type="number" name="rating" placeholder="write your email" className="input input-bordered w-full " /> */}
             <input type="number" name="rating" defaultValue={rating}  className="input input-bordered " />
               </label>
                 </div>
           
                 {/* Photo url */}

                 <div className="form-control w-full">
                <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
           <label className="input-group">
      
             <input type="text" name="photo" defaultValue={photo} placeholder="write name" className="input input-bordered w-full" />
               </label>
                 </div>
                 </div>
                 </div>
     
               <input type="submit" value="Update button"  className="btn btn-primary w-96 lg:w-full text-white"/>
        </form>
    </div>
    );
};

export default UpdateProduct;
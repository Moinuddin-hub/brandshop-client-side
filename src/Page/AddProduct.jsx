import React from 'react';


const AddProduct = () => {

    const handleUpdate=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const quantity=form.brand.value;
        const supplier=form.type.value;
        const taste=form.price.value;
        const category=form.description.value;
        const details=form.rating.value;
        const photo=form.photo.value;
       const newCoffee ={name,quantity,supplier,taste,category,details,photo};
       console.log(newCoffee);
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add Product</h2>
        <form onSubmit={handleUpdate} >
            <div>
            {/* form row */}
            <div className="md:flex md:gap-4 mb-8">
            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Name</span>
              </label>
           <label className="input-group">
      
             <input type="text" name="name" placeholder="write name" className="input input-bordered w-full" />
               </label>
                 </div>

                 <div className="form-control w-1/2">
                <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
           <label className="input-group">
          
             <input type="text" name="brand" placeholder="write your quantity"  className="input input-bordered w-full " />
               </label>
                 </div>
            </div>

              {/* form row */}
              <div className="md:flex md:gap-4 mb-8">
            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Type</span>
              </label>
           <label className="input-group">
      
             <input type="text" name="type" placeholder="write name" className="input input-bordered w-full" />
               </label>
                 </div>

                 <div className="form-control w-1/2">
                <label className="label">
                <span className="label-text">Price</span>
              </label>
           <label className="input-group">
          
             <input type="number" name="price"  placeholder="write your email" className="input input-bordered w-full " />
               </label>
                 </div>
            </div>

              {/* form row */}
              <div className="md:flex md:gap-4 mb-8">
            <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text">Short description</span>
              </label>
           <label className="input-group">
      
             <input type="text" name="description" placeholder="write name" className="input input-bordered w-full" />
               </label>
                 </div>

                 <div className="form-control w-1/2">
                <label className="label">
                <span className="label-text">Rating</span>
              </label>
           <label className="input-group">
          
             <input type="number" name="rating" placeholder="write your email" className="input input-bordered w-full " />
               </label>
                 </div>
            </div>
                 {/* Photo url */}

                 <div className="form-control w-full">
                <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
           <label className="input-group">
      
             <input type="text" name="photo" placeholder="write name" className="input input-bordered w-full" />
               </label>
                 </div>
                 </div>
     
               <input type="submit" value="Add button"  className="btn btn-block bg-black text-white"/>
        </form>
    </div>
    );
};

export default AddProduct;

import Swal from 'sweetalert2'


const AddProduct = () => {

    const handleAdd=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const brandName=form.brand.value;
        const type=form.type.value;
        const price=form.price.value;
        const description=form.description.value;
        const rating=form.rating.value;
        const photo=form.photo.value;
        const newInfo ={name,brandName,type,price,description,rating,photo};
       console.log(newInfo);

   
    //    using fetch 

    // using fetch 
    
    fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data. insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
          });
        
    };
    return (
        <div className="w-[1200px] mx-auto bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add Product</h2>
        <form onSubmit={handleAdd} className='w-80 lg:w-full' >
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
          
             <input type="text" name="brand" placeholder="write your brandName"  className="input input-bordered lg:w-full " />
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
              <input type="text" name="type" placeholder="write type" className="input input-bordered w-full" />
            
               </label>
                 </div>

                 <div className="form-control w-1/2">
                <label className="label">
                <span className="label-text">Price</span>
              </label>
           <label className="input-group">
          
             <input type="number" name="price"  placeholder="write price" className="input input-bordered lg:w-full " />
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
          
             {/* <input type="number" name="rating" placeholder="write your email" className="input input-bordered w-full " /> */}
             <input type="number" name="rating"  className="input input-bordered lg:w-full " />
             {/* <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" /> */}
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
     
               <input type="submit" value="Add button"  className="btn btn-block mt-4 bg-black text-white"/>
        </form>
    </div>
    );
};

export default AddProduct;
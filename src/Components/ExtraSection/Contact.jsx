import React from 'react';

const Contact = () => {
    return (
        <div>
             <h2 className="text-3xl text-center font-bold ">Contact Us</h2>
               <div className="hero h-auto ">
            
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="number" placeholder="Phone" className="input input-bordered" required />
       
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Massage</span>
          </label>
         <textarea name="" id="" cols="10" rows="5" className="border"></textarea>
        
        
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>

  </div>
</div>
        </div>
    );
};

export default Contact;
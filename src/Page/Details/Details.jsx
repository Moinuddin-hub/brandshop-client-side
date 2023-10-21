import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const detail=useLoaderData();
    const{_id,brandName,description,name,photo,price,rating,type}=detail;
    return (
        <div className="card card-compact w-96  bg-emerald-300 shadow-xl">
        <h2 className="text-center font-bold text-2xl">{type}</h2>
<figure><img src={photo} className='w-72 h-48' /></figure>
<div className="card-body">
<div className=" flex justify-between">
   <div className="">
   <h2 className="card-title">{brandName}</h2>
<h2 className="card-title">{name}</h2>
   </div>
   <div className="">
   <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
<h2 className="card-title">{rating}</h2>
   </div>
 
</div>
<p>{description}</p>
<div className="card-actions justify-end">
<button  className="btn btn-primary">Add to Card</button>

</div>
</div>
</div>
    );
};

export default Details;
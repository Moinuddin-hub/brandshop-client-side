import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    const{_id,brandName,description,name,photo,price,rating,type}=data;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
             <h2 className="text-center font-bold text-2xl">{type}</h2>
  <figure><img src={photo} className='w-72 h-48' /></figure>
  <div className="card-body">
    <div className=" flex justify-between">
        <div className="">
        <h2 className="card-title">{brandName}</h2>
     <h2 className="card-title">{name}</h2>
        </div>
        <div className="">
        <h2 className="card-title">Price:${price}</h2>
     <h2 className="card-title">Rating:{rating}</h2>
        </div>
      
    </div>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/updateProduct/${_id}`}><button  className="btn btn-primary">update</button></Link>
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
    );
};

export default Card;
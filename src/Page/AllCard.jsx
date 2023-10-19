import React from 'react';

const AllCard = ({item}) => {
    const{_id,brandName,description,name,photo,price,rating,type}=item;
    return (
        <div>
        <div className="card card-compact w-82 h-full shadow-xl">
            <h2 className="text-2xl font-bold text-center py-4">{type}</h2>
  <figure><img src={photo} alt="Shoes" className='w-full h-40' /></figure>
  <div className="card-body">
     <div className=" flex justify-between">
       <div>
       <h2 className="text-2xl font-bold">{brandName}</h2>
     <h2 className="card-title">{name}</h2>
       </div>
     <h2 className="card-title">Price:{price}</h2>
     </div>
    <p className='text-2xl font-bold'>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllCard;
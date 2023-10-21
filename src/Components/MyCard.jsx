import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCard = () => {



    const Card=useLoaderData();
    const{_id,brandName,description,name,photo,price,rating,type}=Card;
    
    const handleDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
      
              fetch(`http://localhost:5000/products/${Card._id}`,{
                method: "DELETE",
              })
              .then(res=>res.json())
              .then((data)=>{
                console.log(data)
                if(data.deletedCount >0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }



console.log(Card)
    return (
        <div className="card card-compact w-96   bg-teal-500 shadow-xl">
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
     <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
<div className="p">{description}</div>
<button onClick={handleDelete} className="btn btn-primary">Delete</button>
        </div>
      
    </div>
      </div>
      </div>
    );
};

export default MyCard;
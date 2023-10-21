import { Link } from "react-router-dom";

const Category = ({category}) => {
const {image,brandName}=category;
    return (
        <>
  
        <div  className="ml-4 lg:mr-4 bg-teal-500 mt-24 shadow-lg ">
<Link to={`/showCard/${brandName}`}>     <div className="card w-96 h-80 shadow-xl">
  <figure><img src={image} alt="Shoes" className="w-72 mt-4" /></figure>
  <div className="text-center card-body">
    <h2 className="card-title text-3xl text-center ml-8">{brandName}</h2>
  </div>
  </div></Link>

        </div>
        </>
    );
};

export default Category;
import { Link } from "react-router-dom";

const Category = ({category}) => {
const {image,brandName}=category;
    return (
        <>
  
         <div >
<Link to={`/showCard/${brandName}`}>     <div className="card w-96 h-80 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="text-center card-body">
    <h2 className="card-title text-3xl text-center ml-8">{brandName}</h2>
  </div>
  </div></Link>

        </div>
        </>
    );
};

export default Category;


const Category = ({category}) => {
  console.log(category);
const {image,brandName}=category;
    return (
        <>
  
         <div>
     <div className="card w-96 h-80 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="text-center card-body">
    <h2 className="card-title text-3xl text-center ml-8">{brandName}</h2>
  </div>
  </div>

        </div>
        </>
    );
};

export default Category;